import Head from "next/head";
import React from "react";
import Layout from "../components/layout";

import { getSortedPeopleData } from "../lib/people";

export async function getStaticProps() {
  const allPeopleData = await getSortedPeopleData();
  return {
    props: {
      allPeopleData,
    },
  };
}

function Individual({ name, photo_url, position, content }) {
  return (
    <div className="space-y-4  sm:gap-6 sm:space-y-0 lg:gap-8">
      <div className="float-left w-1/3 pr-4">
        <img
          className="object-cover shadow-lg rounded-lg"
          src={photo_url}
          alt=""
        />
      </div>
      <div className="clear-none">
        <div className="space-y-4">
          {/* <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
            <p className="text-indigo-600">{position}</p>
          </div> */}
          <div className="text-lg">
            <div
              className="text-gray-500"
              dangerouslySetInnerHTML={{ __html: "<p>" + content + "</p>" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function People({ allPeopleData }) {
  return (
    <Layout title="People">
      <Head>
        <title>People - BoniLab</title>
      </Head>

      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Postdoctoral Scholars
            </h2>

            <ul
              className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
              data-todo-x-max="1"
            >
              {allPeopleData.map((person, index) => (
                <li key={index}>
                  <Individual {...person}></Individual>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
