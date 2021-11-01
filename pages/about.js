import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="flex flex-col items-center justify-center w-full flex-1 
                      px-10
                      lg:px-40
                      xl:px-60
                      py-20 
                      text-center 
                      md:px-20 sm:px-5 xs:px-5"
      >
        <h1 className="text-6xl font-title text-bold px-20 text-center">
          About
        </h1>
        <div
          className="mt-10 
        font-body 
        text-lg 
        text-left 
        space-y-12
        text-opacity-75 
        max-w-4xl 
        px-10
        sm:px-10
        md:px-10"
        >
          <ol className="list-decimal">
            <li className="font-bold">
              <h2 className="ml-8">
                Backstory of how this document came to be{" "}
              </h2>
            </li>
            <p>
              <br />
              &emsp;&emsp;This document was pulled together over three days in
              an entirely grassroots fashion. On Oct 28, 2021, Facebook
              announced that it was rebranding itself to Meta, alongside a
              keynote announcing that it was becoming a metaverse company.
              <br />
              <br />
              <ol className="list-disc">
                <li className="ml-4 pl-4">
                  Acknowledge Gareth as coining the idea
                </li>
                <li className="ml-4 pl-4">
                  Brief context around the term pluriverse
                </li>
              </ol>
              <br />
              &emsp;&emsp;The original{" "}
              <a
                href="https://www.eff.org/cyberspace-independence"
                target="_blank"
                className="text-blue-900 underline"
              >
                Declaration of the Interdependence of Cyberspace{" "}
              </a>{" "}
              is an important part of the internet’s canon. It was a response to
              a particular moment; the telecoms industry was attempting to
              regulate the early internet. It captures much of what originally
              drew people to the internet, but we found it insufficient for
              several reasons. The original highly emphasizes freedom of speech
              and individual choice; we believe that these freedoms are
              insufficient if not accompanied with the ability to build and own
              our own desired paths. The original takes a highly individualistic
              framing; we believe that power lies in collectivity. The original
              rejects government; we believe that interdependence is possible
              between governments and technologists. The original rejects
              embodiment; we recognize our digital identities and commitments to
              be interwoven with existing communities, societies, and
              relationships in the physical and material world.
              <br />
              <br />
              &emsp;&emsp;In short, we want independence, yes, but also{" "}
              <i>interdependence.</i>
              <br />
              <br />
              <ul className="list-disc">
                <li className="ml-4 pl-4">
                  True interoperability and the resulting ability to pave our
                  own desire paths
                </li>
                <li className="ml-4 pl-4">
                  Hard and soft norms of mutualism, reciprocity, and collective
                  ownership
                </li>
              </ul>
              <br />
            </p>
            <li className="font-bold">
              <h2 className="ml-8">Software</h2>
            </li>
            <br />
            &emsp;&emsp;The ontology of this object, and how other related
            objects can be generated related to it, reflects the ethos of our
            Declaration.
            <br />
            &emsp;&emsp;The document was entered into the permaweb on Oct 31,
            2021, on the thirteenth anniversary of the publication of the
            Bitcoin whitepaper.
            <br />
            &emsp;&emsp;The code for our digital home is all open-source, and
            available{" "}
            <a
              href="https://github.com/danishabbir/Interdependence-"
              target="_blank"
              className="text-blue-900 underline"
            >
              here
            </a>
            . The diff from the original Declaration is here.
            <br />
            &emsp;&emsp;Anyone is able to show their support for our Declaration
            by signing with an Arweave wallet. [tk add copy about being able to
            query everything that a user has signed - this is an inversion of
            the user-NFT ownership relation]
            <br />
            <br />
            <ol className="list-disc">
              <li className="ml-4 pl-4">
                The tools we used (look to @cryptowanderer’s talk on this & the
                importance of tools){" "}
              </li>{" "}
              <li className="ml-4 pl-4">
                Ability to fork easily / build a different UI on top of the same
                blocks that we use{" "}
              </li>{" "}
              <li className="ml-4 pl-4">Signing</li>
            </ol>
            <br />
            There are also a few other hidden Easter eggs in the design
            decisions - let us know if you discover them.
            <br />
            <br />
            <li className="font-bold">
              <h2 className="ml-8">Authorship</h2>
            </li>
            <br />
            <p>
              &emsp;&emsp;This work was in some ways a microcosm of the
              difficulty of collective, plural work - recognition is difficult
              especially given Shapley values and the multidimensional nature of
              contribution. We collapse all these things in an attempt to create
              some legible rank ordering of authorship.
              <br />
              <br />
              <ul className="list-disc">
                <li className="ml-4 pl-4">
                  Recognition is difficult because it is multidimensional{" "}
                </li>{" "}
                <li className="ml-16 pl-4">
                  Writing, editing (the latter especially is ephemeral){" "}
                </li>{" "}
                <li className="ml-16 pl-4">
                  {" "}
                  Intellectual / thought partnership. We owe intellectual debts,
                  for example, to @cryptowanderer.{" "}
                </li>{" "}
                <li className="ml-16 pl-4">Organizing / PM </li>
                <li className="ml-16 pl-4">Engineering </li>
                <li className="ml-4 pl-4">
                  Diff temporal commitments (e.g. hint at larger body of written
                  / software work that is to come here)
                </li>
              </ul>
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}
