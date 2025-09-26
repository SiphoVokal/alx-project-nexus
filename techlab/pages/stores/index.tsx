"use client"

import Head from "next/head";
import React from "react";

export default function Stores() {
  return (
    <>
      <Head>
        <title>Our Stores | TECHlab</title>
        <meta
          name="description"
          content="Find TECHlab premium Apple reseller stores near you in Gauteng, South Africa. Explore our locations and get hands-on with the latest Apple devices."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-16">
        <article className="mx-auto max-w-4xl prose prose-slate dark:prose-invert">
          <header className="text-center mb-8">
            <p className="text-2xl uppercase tracking-widest text-gray-500">Store Locator</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Find a TECHlab store near you</h1>
            <div className="mt-4 text-sm text-gray-600">Discover our premium Apple reseller stores across Gauteng, South Africa.</div>
          </header>

          <section className="mt-1">
            <h2>Store Locations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Sandton City, Johannesburg:</strong> Rivonia Road, Sandton</li>
              <li><strong>Menlyn Park, Pretoria:</strong> Atterbury Road, Menlyn</li>
              <li><strong>Eastgate Mall, Johannesburg:</strong> Bradford Road, Bedfordview</li>
              <li><strong>Maponya Mall, Soweto:</strong> Chris Hani Road, Soweto</li>
              <li><strong>Centurion Mall, Centurion:</strong> Heuwel Avenue, Centurion</li>
            </ul>
          </section> 
          <section className="mb-6">
            <p>
              Use our interactive store locator below to find a TECHlab near you.
            </p>
          </section>
          <section className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57027.70353269103!2d28.003055199999998!3d-26.1121404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950dbcd764aef5%3A0x9b45752c5ab07df4!2sSandton%20City%20Mall!5e0!3m2!1sen!2sza!4v1695566740000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>

          <footer className="mt-8 border-t pt-6 text-sm text-gray-600">
            <p>
              Can’t find a store near you? <a href="/contact" className="text-blue-600 underline">Contact us</a> for support or
              shop online.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
