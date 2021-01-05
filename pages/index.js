import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Head>
        <title>Home - BoniLab</title>
      </Head>
      <div>
        <Hero></Hero>
        <div className="-mx-4">
          <img
            className="object-cover object-bottom w-full h-full my-6"
            src="https://mol.ax/content/media/2019/08/thegroup_2015_4.43_ratio_wtext.jpg"
          />
        </div>
        <Collaboration></Collaboration>
        <ResearchArea></ResearchArea>
        <div className="-mx-4">
          <img
            className="object-cover object-bottom w-full h-full my-6"
            src="http://mol.ax/content/media/main/vung_tau_team_pic_1400x350.jpg"
          />
        </div>
      </div>
    </Layout>
  );
}

const Hero = (props) => (
  <>
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 pb-0 sm:pb-0">
        <main className="mx-auto max-w-7xl px-4 ">
          <div className="text-center p-8">
            <h1 className="pb-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Modeling to control </span>
              <span className="block text-indigo-600 xl:inline">
                infectious diseases
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-left text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Pathogens generate a complex set of signals as they spread through
              human populations. A single infection can result in a set of
              clinical symptoms, a case report in a hospital surveillance
              system, a genetic sequence, a treatment outcome, an antibody
              repertoire, and modified social behavior.
            </p>
            <p className="mt-3 max-w-md mx-auto text-base text-left text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The Boni Lab investigates these different data points and data
              streams with methods at the interface of field, clinical, and
              computational epidemiology. From 2008 to 2016, we were based at
              the Oxford University Clinical Research Unit in Ho Chi Minh City.
              Currently, we are based at the Center for Infectious Disease
              Dynamics, Department of Biology, Pennsylvania State University.
            </p>
            <p className="mt-3 max-w-md mx-auto text-base text-left text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              See our pages on{" "}
              <a className="font-bold text-red-700" href="#">
                SARS-CoV-2
              </a>{" "}
              related work.
            </p>
          </div>
        </main>
      </div>
    </div>
  </>
);

const Collaboration = (props) => (
  <>
    <div className="bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          ></rect>
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Current Collaborations
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div>
              <CollaborationLogo img_url="https://malariamodelingconsortium.org/wp-content/uploads/2017/12/gates-foundation_0.png" />
              <div className="mt-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Malaria Modeling Consortium
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We are part of the Bill and Melinda Gates Foundation’s{" "}
                  <strong>Malaria Modeling Consortium</strong> (MMC) which
                  currently includes several of the world’s leading mathematical
                  modeling groups in malaria. Our current role is to lead Work
                  Package 2 on drug-resistance evolution, whose main goal is to
                  evaluate stewardship plans for ACTs and other novel
                  antimalarials over the next decade.
                </dd>
              </div>
            </div>

            <div>
              <CollaborationLogo img_url="http://www.oucru.org/wp-content/uploads/2013/04/logo.png" />
              <div className="mt-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  OUCRU and NIH-CEIRS
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We recently received funding from the{" "}
                  <strong>
                    Johns Hopkins Center for Excellence in Influenza Research
                    and Surveillance
                  </strong>{" "}
                  (CEIRS) to investigate how antibody profiles change after an
                  influenza infection, and whether broadly-neutralizing antibody
                  to the HA2-stalk region is sufficiently long-lasting for
                  vaccination purposes. This project will be carried out in
                  collaboration with the{" "}
                  <strong>Oxford University Clinical Research Unit</strong> in
                  Vietnam.
                </dd>
              </div>
            </div>

            <div>
              <CollaborationLogo img_url="http://www.gorgas.gob.pa/wp-content/uploads/2019/01/logo-icges-header-transparente1.png" />
              <div className="mt-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Arboviral Interactions in Panama
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  In 2019, we began working with the{" "}
                  <strong>
                    Instituto Conmerativo Gorgas de Estudios de la Salud
                  </strong>{" "}
                  to measure interactions rates among a range of arboviruses —
                  dengue virus, Zika virus, chikungunya virus — that are endemic
                  to Central and South America. Our current role is to
                  reconstruct about 10 years of arboviral epidemiology in Panama
                  to determine if different viral epidemics interfere with each
                  other.
                </dd>
              </div>
            </div>

            <div>
              <CollaborationLogo img_url="https://www.tropmedres.ac/images/site-images/moru-updated-logo-2019" />
              <div className="mt-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  DeTACT
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {
                    'In 2019, the DeTACT trial — "Developing Triple Artemisinin Combination Therapies" — began recruiting patients in Asia and Africa. The trial is led by PI Arjen Dondorp from the '
                  }
                  <strong>Mahidol-Oxford Research Unit</strong> in Bangkok. We
                  are leading the mathematical modeling work package whose aim
                  is to assess the risks of drug resistance emerging to triple
                  ACTs and optimal population-level deployment strategies once
                  TACTs are approved.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </>
);

const CollaborationLogo = ({ img_url }) => {
  return (
    <div className="w-1/3 h-16">
      <img
        className="align-bottom object-contain h-full w-full"
        src={img_url}
      />
    </div>
  );
};

const researchAreaData = [
  {
    topic: "Influenza in the Tropics",
    content:
      "The majority of our research questions fall under the umbrella of tropical influenza epidemiology.   We look at the circulation of human or “seasonal” influenza viruses in the tropics as well as the ecology and evolution of avian influenza viruses and factors that are linked with human exposure.   We run both field and clinical studies in southern Vietnam.   Our laboratory methods focus on identifying antibody repertoires and viral sequences, and our analytical methods are rooted in mathematical modeling and fitting models to data with likelihood methods.   Our key goals are to characterize influenza’s persistence patterns, its seasonal patterns (or lack thereof), the relationship between influenza circulation and other respiratory viruses, and the symptomatic/asymptomatic nature of influenza epidemics in Vietnam.",
  },
  {
    topic: "Multiple First-line Therapies for Malaria",
    content:
      "The area of the most direct public health relevance that we work in is analysis and optimization of population-level treatment strategies for malaria.   A balance must be struck when designing a population-level treatment strategy, as high levels of treatment drive drug resistance evolution but low levels are associated with high morbidity and mortality.   One method of lowering the risk of resistance evolution to an individual drug, while maintaining high treatment rates in the population as a whole, is to deploy multiple drugs simultaneously in the population.   Our epidemiological microsimulations have shown that recommending simultaneous use of multiple first-line therapies (MFT) for malaria is a better public health strategy that the status quo approach.",
  },
  {
    topic: "Big-data Seroepidemiology",
    content:
      "Since the 2009 influenza pandemic, repeated cross-sectional seroepidemiological study designs have become a common way to explore the dynamics of infection, susceptibility, and post-infection antibody responses.   In southern Vietnam, we have initiated a study in which periodic collections of population-representative serum are collected every few months, and we are currently testing for the presence of influenza antibody in these samples.   The resulting data set is structured as a serological time series, or an antibody time series, and it allows for the inference of past disease dynamics if the underlying epidemiological models of infleunza transmission are believed to be correct.   The inferential process reconstructs complete disease dynamics, i.e. the dynamics of symptomatic, subclinical, and asymptomatic influenza infections.",
  },
  {
    topic: "Participatory Epidemiology",
    content:
      "One of our key study frameworks is a community network of general practitioners in Ho Chi Minh City who send out daily reports of case numbers of influenza-like illness (ILI) by standard SMS text messages.   These ILI reports are aggregated daily and reported in real-time at www.ili.vn to show the current and recent trends of ILI activity in Ho Chi Minh City.   One of the key questions we will be answering in this study is whether ILI trends and influenza trends are correlated in the tropics.   If they are not, influenza surveillance systems in the tropics will need to place an emphasis on virological/molecular confirmation over syndromic surveillance.   In addition, other repiratory viruses will need to be studied in more detail in Vietnam to determine the major causes of non-influenza ILI peaks.",
  },
  {
    topic: "Recombination Detection",
    content:
      "Part of our work is focused in bioinformatics, and the key tool that we have been maintaining for ten years is the recombination detection algorithm 3SEQ along with an online statistical calculator that can be used more generally to test the null hypothesis of “no mosaicism” in any type of string or sequence.   The statistical test used in this tool is a non-parametric test for detecting clustering in one dimension (also called anomalous interval detection).   It simply detects if one set of binary observations is clustered in the middle of second set of binary observations, and it can be viewed as a two-breakpoint version of the Mann-Whitney U-test or the Wilcoxon Rank-Sum test.",
  },
  {
    topic: "Epidemiological Theory",
    content:
      "All of our work is founded in epidemiological theory.   In addition to the field, clinical, and sequence based work that we do, we try to keep up with and contribute to the literature on study design, pathogen ecology and evolution, evolutionary epidemiology, and economic epidemiology.   Our malaria work is rooted in the theory that evolutionary adaptation is slow in variable environments.   Presenting the malaria parasite with simultaneous multiple lethal challenges should make it difficult for the parasite to evolve resistance to all of them.   Likewise, part of our influenza work seeks to test the theory that long chains of influenza transmission in the tropics afford the virus more opportunity to accumulate the necessary genetic mutations to escape population immunity through antigenic drift.   Testing this hypothesis requires a time series of population immunity, virus sequences, and case numbers – something we have been working towards over the past five years.",
  },
];

const ResearchArea = (props) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Research Area
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {researchAreaData.map((researchTopic, index) => {
              return (
                <ResearchTopic key={index} data={researchTopic}></ResearchTopic>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

const ResearchTopic = ({ data }) => {
  return (
    <div className="flex">
      {/* <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </div>
      </div> */}
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">
          {data.topic}
        </dt>
        <dd className="mt-2 text-base text-gray-500">{data.content}</dd>
      </div>
    </div>
  );
};
