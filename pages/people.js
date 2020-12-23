import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";

import { getSortedPeopleData } from "../lib/people";

export async function getStaticProps() {
  const allPeopleData = await getSortedPeopleData();
  return {
    props: {
      allPeopleData,
    },
  };
}

export default function People({ allPeopleData }) {
  return (
    <Layout title="People">
      <Head>
        <title>People - BoniLab</title>
      </Head>
      <div className="bg-gray-100 text-gray-700">
        <div className="container mx-auto">
          <div className="p-4 md:p-16">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-4">
              {allPeopleData.map((profile) => (
                <Profile {...profile}></Profile>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
