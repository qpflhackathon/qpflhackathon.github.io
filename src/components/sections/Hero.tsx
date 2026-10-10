import Image from "next/image";

import heroLogo from "@assets/images/red_transparent.png";
import { Button } from "@/components/ui/Button";
import { event } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center justify-center px-6 pt-20 pb-12 md:pt-24 lg:pt-26"
    >
      <div className="mx-auto max-w-[900px] text-center lg:max-w-[1000px]">
        <Image
          src={heroLogo}
          alt="QPFL logo"
          priority
          className="mx-auto mb-12 h-auto w-[min(70vw,700px)]"
        />

        <div className="mt-8">
          <h1 className="my-[0.67em] text-[2rem] font-semibold">{event.name}</h1>
          <p className="my-4 text-[1.17rem] font-semibold">- {event.edition} -</p>
          <p className="my-4 font-ui text-[1.2rem] tracking-[0.06em] uppercase">{event.dates}</p>

          <div className="mx-auto w-80 max-w-full">
            <Button className="w-full">Registration will open soon!</Button>
            {/*
            <div className="mt-2.5 flex gap-2">
              <Button variant="secondary" href="#" className="flex-1">Discord</Button>
              <Button variant="secondary" href="#" className="flex-1">GitHub</Button>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
