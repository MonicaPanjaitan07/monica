import Link from "next/link";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import { expertise, projects, certs } from "@/components/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats items={[[certs.length, "Certificates & trainings"], [projects.length, "Team projects"], [3, "Focus areas"]]} />
      <section className="wrap sec">
        <h2 className="rv sec-title"><span>What I do</span></h2>
        <div className="grid">{expertise.map(([t, d], i) => (
          <div key={t} className={`rv card exp e${i}`}><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div>
        ))}</div>
      </section>
      <section className="wrap sec">
        <h2 className="rv sec-title"><span>Featured projects</span></h2>
        <div className="grid two">{projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="rv card proj"><img className="cover" src={p.cover} alt={p.title} /><p className="meta">{p.year}</p><h3>{p.title}</h3><p>{p.tag}</p></Link>
        ))}</div>
        <p className="more"><Link className="ghost" href="/projects">All projects →</Link></p>
      </section>
    </>
  );
}
