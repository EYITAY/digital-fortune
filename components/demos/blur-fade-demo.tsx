import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/business.png",
    title: " Company Website | CyberPlanet LLC",
    link: "https://cyberplanet.llc/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/wtm.png",
    title: "Community Website | WTM Sacramento",
    link: "https://wtmsacramento.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/edcastr.png",
    title: "AI Web App | Edcastr",
    link: "https://edcastr.vercel.app/ ",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/asfaleia.png",
    title: "Cyber Attack Dashboard | Asfaleia",
    link: "https://asfaleia.vercel.app/",
  },

  {
    background: "bg-gray-200",
    imageUrl: "/images/df500.png",
    title: "e-commerce website | DF 500 Market Place",
    link: "https://marketplace.digitalfortune500.online/",
  },

  {
    background: "bg-gray-200",
    imageUrl: "/images/flyteksystems.png",
    title: "Drone Company | Fly TekSystems",
    link: " https://flyteksystems.com/",

  },



 
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}