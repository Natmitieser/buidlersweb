"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Users, Heart, MessageSquare, Search, Calendar, Globe, ChevronRight, Hash, ArrowUpRight } from 'lucide-react';

// --- 1. CONFIGURACIÓN VISUAL (BRANDBOOK) ---
const COLORS = {
  bg: '#10100F',        // Chinese Black
  corn: '#F1E65D',      // Amarillo Buidlers
  ivory: '#FFFEF0',     // Texto Principal
  rifle: '#484736',     // Bordes / Dim
  artichoke: '#9D9A72', // Texto Secundario

  syntax: {
    orange: '#F57A0C',
    red: '#CD3130',
    green: '#10B068',
    blue: '#3A7CC1',
  }
};

const VALUES = [
  { term: "soberanía", def: "control total e inalienable sobre la propia identidad y datos;" },
  { term: "autonomía", def: "ejecutar código sin pedir permiso; libertad para crear;" },
  { term: "resiliencia", def: "la falla de un nodo no compromete la totalidad del sistema;" },
  { term: "transparencia", def: "la lógica visible es la base de la confianza;" },
];

const EVENTS_DATA = [
  {
    title: "hackathon pixel operator",
    date: "2025-09-20 18:00",
    status: "DONE",
    loc: "buidlers_hub",
    // Detalle exacto encontrado en el texto
    logs: [
      "INFO: 48h de build (Web3 + IA);",
      "OUTPUT: seeds, mentorías y acceso a infra;"
    ]
  },
  {
    title: "cena de agradecimiento",
    date: "2025-12-21 16:30",
    status: "UPCOMING",
    loc: "condominio sky elite",
    // Mensaje emotivo exacto del texto
    logs: [
      "INFO: agradecer a cada voluntario y al core team;",
      "INFO2: cerrar el año, compartir y celebrar lo logrado;",
      "MSG: ¡nos encantaría contar con ustedes!;"
    ]
  },
];

// --- BASE DE DATOS MEJORADA (CON FRASES LITERALES DEL TEXTO) ---

// 1. DATA EQUIPO (Concepto: Red de Nodos / Resiliencia)
const TEAM_DATA = {
  ceo: {
    name: "ana_dev",
    role: "/root (ceo)",
    // Frase literal encontrada en la sección 'vision' del texto
    quote: "el punto cero; donde se quema lo anterior para construir algo nuevo;"
  },
  nodes: [
    // Agregamos 'ping' para simular la "fortaleza estructural de la red" que menciona el texto
    { name: "carlos_lpz", role: "node_leader", status: "connected", ping: "24ms" },
    { name: "lucia_scz", role: "evangelist", status: "connected", ping: "12ms" },
    { name: "marco_cba", role: "buidler", status: "syncing...", ping: "99ms" }
  ]
};

// 2. DATA PROYECTOS (Concepto: Herramientas Reales)
const PROJECTS_DATA = [
  {
    id: 1,
    name: "sovereign_id",
    // Frase literal del 'echo' en el texto
    desc: "privacidad ≠ aislamiento; privacidad = poder compartido;",
    likes: 142,
    url: "buidlers.org/id"
  },
  {
    id: 2,
    name: "ai_ethics_core",
    // Frase literal del 'echo' en el texto
    desc: "herramientas para humanos, no para corporaciones;",
    likes: 98,
    url: "buidlers.org/ai"
  },
  {
    id: 3,
    name: "dao_gov",
    // Concepto de 'Autonomía' del texto
    desc: "ejecutar código sin pedir permiso;",
    likes: 210,
    url: "buidlers.org/gov"
  },
];

// --- 2. COMPONENTES AUXILIARES ---

// Secuencia de inicio tipo Hacker
const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<{ text: string, color: string }[]>([]);
  const script = [
    { text: "# systems check...", color: COLORS.artichoke },
    { text: "STATUS: centralized control [!]", color: COLORS.syntax.red },
    { text: "ACTION: run decentralize_now.sh", color: COLORS.syntax.orange },
    { text: "loading modules...", color: COLORS.artichoke },
    { text: "OUTPUT: autonomy restored;", color: COLORS.syntax.green },
    { text: "function empower() { return (knowledge + collaboration); }", color: COLORS.ivory },
    { text: "echo 'Build with us → Buidlers.world';", color: COLORS.corn },
  ];

  useEffect(() => {
    let delay = 0;
    script.forEach((line, index) => {
      delay += 600;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === script.length - 1) setTimeout(onComplete, 800);
      }, delay);
    });
  }, []);

  return (
    <div className="font-mono text-sm md:text-base space-y-2 p-6 h-full flex flex-col justify-center">
      {lines.map((l, i) => (
        <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
          <span className="mr-2 text-[#484736]">{">"}</span>
          <span style={{ color: l.color }}>{l.text}</span>
        </div>
      ))}
      <span className="animate-pulse text-[#F1E65D]">_</span>
    </div>
  );
};

// Tarjeta de Proyecto con proporción 16:9 (El Caret)
const ProjectCard = ({ name, desc, likes }: { name: string, desc: string, likes: string }) => (
  <div className="group border border-[#484736] bg-[#10100F] hover:border-[#F1E65D] transition-all duration-300">
    <div className="w-full aspect-video bg-[#161616] relative overflow-hidden border-b border-[#484736] group-hover:border-[#F1E65D]">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(#F1E65D 1px, transparent 1px)', backgroundSize: '3px 3px' }}></div>
      <div className="absolute bottom-2 left-2 bg-[#F1E65D] text-[#10100F] text-[10px] font-mono px-1">IMG_16:9</div>
    </div>
    <div className="p-4">
      <h3 className="text-[#FFFEF0] font-sans font-medium text-lg mb-1">{name}</h3>
      <p className="text-[#9D9A72] font-mono text-xs mb-4 h-10">{desc}</p>
      <div className="flex justify-between items-center border-t border-[#1C1C1C] pt-3">
        <span className="text-xs font-mono text-[#F1E65D] flex items-center gap-1"><Heart size={12} /> {likes}</span>
        <span className="text-[10px] font-mono text-[#9D9A72]">./view_project</span>
      </div>
    </div>
  </div>
);

// --- 3. COMPONENTE PRINCIPAL ---
export default function BuidlersWeb() {
  const [view, setView] = useState('inicio');
  const [booting, setBooting] = useState(true);

  const renderContent = () => {
    // Si está "booting" y estamos en inicio, mostramos la secuencia
    if (booting && view === 'inicio') {
      return <BootSequence onComplete={() => setBooting(false)} />;
    }

    switch (view) {

      // --- VISTA: INICIO ---
      case 'inicio':
        return (
          <div className="animate-in fade-in duration-700 space-y-12">
            <div className="border-l-4 border-[#F1E65D] pl-6 py-4 md:py-8 max-w-4xl">
              <p className="font-mono text-xs md:text-sm text-[#9D9A72] mb-2">init &#123;</p>
              <h1 className="text-3xl md:text-6xl font-medium text-[#FFFEF0] leading-none mb-6 font-sans tracking-tight">
                el punto cero;<br />
                donde se quema lo anterior.
              </h1>
              <div className="font-mono text-sm md:text-base space-y-1">
                <p style={{ color: COLORS.syntax.orange }}>echo "construimos herramientas que empoderan";</p>
                <p style={{ color: COLORS.corn }}>web3 + ia // privacidad == derecho;</p>
              </div>
              <p className="font-mono text-xs md:text-sm text-[#9D9A72] mt-2">&#125;</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {VALUES.map((val, i) => (
                <div key={i} className="border border-[#484736] p-5 hover:bg-[#161616] transition-colors group">
                  <h3 className="font-mono text-[#F1E65D] text-sm uppercase mb-2 group-hover:underline decoration-1 underline-offset-4">
                    var {val.term} =
                  </h3>
                  <p className="font-sans text-[#FFFEF0] text-lg leading-snug">"{val.def}"</p>
                </div>
              ))}
            </div>

            {/* NUEVO: BLOQUE DE PILARES (State/Economy/Foundation) */}
            <div className="grid grid-cols-3 gap-2 border-t border-b border-[#484736] py-4 my-8">
              {['state', 'economy', 'foundation'].map((module) => (
                <div key={module} className="text-center">
                  <span className="text-[9px] text-[#484736] font-mono uppercase block mb-1">module</span>
                  <span className="text-xs text-[#9D9A72] font-mono">.{module}</span>
                </div>
              ))}
            </div>

            {/* BOTÓN ACTUALIZADO */}
            <div className="pt-4">
              <button onClick={() => setView('ranking')} className="group bg-[#F1E65D] text-[#10100F] font-mono px-6 py-3 font-bold hover:bg-white transition-colors flex items-center gap-2">
                <span>./join_buidlers --init</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );

      // --- VISTA: RANKING ---
      case 'ranking':
        return (
          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-[#484736] pb-4 gap-4">
              <div>
                <p className="font-mono text-xs text-[#9D9A72]">./directory</p>
                <h2 className="text-3xl font-sans font-medium text-[#F1E65D]">ranking_proyectos</h2>
              </div>
              <input type="text" placeholder="find_query;" className="w-full md:w-64 bg-[#10100F] border border-[#484736] text-[#FFFEF0] p-2 pl-2 font-mono text-sm focus:border-[#F1E65D] outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id}>
                  <ProjectCard
                    name={proj.name}
                    desc={proj.desc}
                    likes={proj.likes.toString()}
                  />
                  {/* Nuevo: La URL al pie del proyecto como pide el texto */}
                  <div className="text-right mt-1">
                    <span className="text-[10px] font-mono text-[#484736] hover:text-[#F1E65D] cursor-pointer">
                      -{'>'} {proj.url}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // --- VISTA: EQUIPO ---
      case 'equipo':
        return (
          <div className="max-w-4xl space-y-10">
            <h2 className="text-3xl font-sans font-medium text-[#F1E65D] border-b border-[#484736] pb-4">core_team_&_nodes</h2>
            <div className="flex gap-4 items-start">
              <div className="font-mono text-[#F57A0C] w-24 text-right pt-1">/root</div>
              <div className="flex-1 border-l-2 border-[#F57A0C] pl-6 py-1">
                <h3 className="text-xl text-[#FFFEF0] font-bold">{TEAM_DATA.ceo.name}</h3>
                <p className="text-[#9D9A72] font-mono text-sm">role: {TEAM_DATA.ceo.role};</p>
                <p className="text-[#FFFEF0] italic mt-2">"{TEAM_DATA.ceo.quote}"</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="font-mono text-[#3A7CC1] w-24 text-right pt-1">/nodes</div>
              <div className="flex-1 space-y-4">
                {TEAM_DATA.nodes.map((node, i) => (
                  <div key={i} className="border border-[#484736] p-3 flex justify-between items-center bg-[#161616] group hover:border-[#F1E65D] transition-colors">
                    <div>
                      <span className="text-[#FFFEF0] block font-mono text-sm">{node.name}</span>
                      <span className="text-[10px] text-[#484736]">{node.role}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-mono block ${node.status.includes('connected') ? 'text-[#3A7CC1]' : 'text-[#F57A0C]'}`}>
                        [{node.status}]
                      </span>
                      {/* Nuevo: Dato técnico de latencia */}
                      <span className="text-[9px] font-mono text-[#484736]">ping: {node.ping}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // --- VISTA: REDES (REINTEGRADA) ---
      case 'redes':
        return (
          <div className="max-w-3xl h-full flex flex-col justify-center">
            <div className="mb-8 border-b border-[#484736] pb-4">
              <h2 className="text-3xl font-sans font-medium text-[#F1E65D]">social_environment</h2>
              <p className="font-mono text-xs text-[#9D9A72] mt-1">./connecting_nodes...</p>
            </div>

            <div className="grid gap-4">
              {['twitter / x', 'discord_server', 'github_repo', 'linkedin_profile'].map((net, i) => (
                <a key={i} href="#" className="flex items-center justify-between p-5 border border-[#484736] hover:bg-[#F1E65D] hover:text-[#10100F] hover:border-[#F1E65D] group transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm md:text-lg group-hover:font-bold">{net}_link;</span>
                  </div>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>

            <div className="mt-12 p-4 bg-[#161616] border-l-2 border-[#F1E65D] font-mono text-xs text-[#9D9A72]">
              status: waiting_for_handshake... <br />
              ping: 24ms
            </div>
          </div>
        );

      // --- VISTA: EVENTOS (REINTEGRADA) ---
      case 'eventos':
        return (
          <div className="max-w-4xl">
            <div className="mb-8 border-b border-[#484736] pb-4">
              <h2 className="text-3xl font-sans font-medium text-[#F1E65D]">event_log</h2>
              <p className="font-mono text-xs text-[#9D9A72] mt-1">./syncing_calendar</p>
            </div>

            <div className="relative border-l border-[#484736] ml-3 space-y-12 py-4">
              {EVENTS_DATA.map((ev, i) => (
                <div key={i} className="relative pl-8">
                  {/* Puntos de estado */}
                  <div
                    className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#10100F]`}
                    style={{ backgroundColor: ev.status === 'UPCOMING' ? COLORS.corn : '#484736' }}
                  ></div>

                  <span className="text-[10px] font-mono px-2 py-0.5 border border-[#484736] bg-[#161616] text-[#9D9A72] rounded-sm mb-2 inline-block lowercase">
                    time="{ev.date}"
                  </span>

                  <h3 className="text-xl md:text-2xl text-[#FFFEF0] font-sans font-medium mt-1 leading-tight lowercase">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-[#9D9A72] font-mono mt-1 mb-3">loc: "{ev.loc}"</p>

                  {/* NUEVO: LOGS DE CONSOLA (INFO/OUTPUT) */}
                  <div className="bg-[#161616] border-l-2 border-[#484736] p-3 font-mono text-xs space-y-1 text-[#9D9A72]">
                    {ev.logs.map((log, j) => (
                      <p key={j} className={log.startsWith('OUTPUT') ? 'text-[#F1E65D]' : ''}>
                        {log}
                      </p>
                    ))}
                  </div>

                  {ev.status === 'UPCOMING' && (
                    <button className="mt-4 border border-[#F1E65D] text-[#F1E65D] text-xs font-mono px-4 py-2 hover:bg-[#F1E65D] hover:text-[#10100F] uppercase tracking-wider transition-colors">
                      confirmar_asistencia();
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default: return <div className="p-10 font-mono text-[#F1E65D]">./module_under_construction...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#10100F] text-[#FFFEF0] font-sans selection:bg-[#F1E65D] selection:text-[#10100F] flex flex-col md:flex-row overflow-hidden">

      {/* --- SIDEBAR DESKTOP --- */}
      <aside className="hidden md:flex flex-col justify-between w-[220px] h-screen fixed left-0 top-0 border-r border-[#484736] bg-[#10100F] z-50">
        <div className="pt-16">
          <nav className="flex flex-col">
            {[
              { id: 'inicio', label: 'inicio', icon: Terminal },
              { id: 'ranking', label: 'ranking', icon: Hash },
              { id: 'equipo', label: 'equipo', icon: Users },
              { id: 'redes', label: 'redes', icon: Globe },
              { id: 'eventos', label: 'eventos', icon: Calendar }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); if (item.id === 'inicio') setBooting(false); }}
                className={`group flex items-center gap-3 px-6 py-4 border-l-2 transition-all duration-200
                   ${view === item.id
                    ? 'border-[#F1E65D] bg-[#161616] text-[#F1E65D]'
                    : 'border-transparent text-[#9D9A72] hover:text-[#FFFEF0] hover:bg-[#161616]'
                  }`}
              >
                <item.icon size={18} />
                <span className="font-mono text-sm lowercase">{item.label};</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6 pb-10 w-full">
          <div className="w-10 h-[6px] bg-[#F1E65D] mb-3"></div>
          <h1 className="text-2xl font-bold tracking-tighter leading-none text-[#FFFEF0]">buidlers<span className="animate-pulse">_</span></h1>
          {/* NUEVO: EL BREADCRUMB DEL TEXTO */}
          <div className="text-[10px] text-[#9D9A72] font-mono mt-2 flex flex-col">
            <span># buidlers realm</span>
            <span># builders@world</span>
          </div>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 md:ml-[220px] h-screen overflow-y-auto">
        <div className="p-6 md:p-12 md:max-w-7xl mx-auto min-h-full">
          <div className="md:hidden flex justify-between items-end mb-8 border-b border-[#484736] pb-4">
            <div>
              <div className="w-8 h-[5px] bg-[#F1E65D] mb-1"></div>
              <h1 className="text-2xl font-bold tracking-tighter leading-none text-[#FFFEF0]">
                buidlers<span className="animate-pulse">_</span>
              </h1>
              {/* NUEVO: EL BREADCRUMB DEL TEXTO */}
              <div className="text-[10px] text-[#9D9A72] font-mono mt-2 flex flex-col">
                <span># buidlers realm</span>
                <span># builders@world</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#484736]">MENU_BELOW</span>
          </div>

          {renderContent()}

          <div className="h-24 md:h-0"></div>
        </div>
      </main>

      {/* --- NAVBAR MÓVIL --- */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#10100F] border-t border-[#484736] z-50 grid grid-cols-5 h-16">
        {[
          { id: 'inicio', icon: Terminal },
          { id: 'ranking', icon: Hash },
          { id: 'equipo', icon: Users },
          { id: 'redes', icon: Globe },
          { id: 'eventos', icon: Calendar }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => { setView(item.id); setBooting(false); }}
            className={`flex flex-col items-center justify-center border-t-2 transition-colors
               ${view === item.id ? 'border-[#F1E65D] bg-[#161616] text-[#F1E65D]' : 'border-transparent text-[#9D9A72]'}`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </nav>
    </div>
  );
}
