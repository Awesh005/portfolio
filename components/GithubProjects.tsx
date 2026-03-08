
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, ExternalLink, Github } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  forks_count: number;
  owner: {
    login: string;
  };
}

const GithubProjects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Awesh005/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
            .slice(0, 6); // Show latest 6
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 bg-zinc-100 rounded-2xl border border-zinc-200"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-white">
            <Github size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tighter">Open Source</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Live from GitHub</p>
          </div>
        </div>
        <a 
          href="https://github.com/Awesh005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 hover:underline"
        >
          Follow @Awesh005
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, idx) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative bg-white border border-zinc-200 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-500 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            {/* Preview Image */}
            <div className="relative h-48 overflow-hidden bg-zinc-100">
              <img 
                src={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                alt={repo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Live Badge */}
              {repo.homepage && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
                  <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                  Live
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="flex gap-3 w-full">
                  <a 
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-white text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    View Code
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-indigo-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    {repo.language || 'Markdown'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-amber-500" />
                    <span className="text-[10px] font-black text-zinc-500">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch size={12} className="text-zinc-400" />
                    <span className="text-[10px] font-black text-zinc-500">{repo.forks_count}</span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-black text-zinc-900 mb-3 tracking-tight group-hover:text-indigo-500 transition-colors">
                {repo.name.replace(/-/g, ' ')}
              </h4>

              <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed mb-6 flex-1">
                {repo.description || "No description provided for this repository."}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Updated {new Date(repo.updated_at).getFullYear()}
                </span>
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-indigo-500 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <motion.a
          href="https://github.com/Awesh005?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-zinc-900 text-white rounded-2xl text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3 shadow-xl shadow-zinc-500/10"
        >
          View All Repositories
          <Github size={16} />
        </motion.a>
      </div>
    </div>
  );
};

export default GithubProjects;
