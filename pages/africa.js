import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../component/header";
import Title from '../component/title';
import Footer from '../component/footer';
import flags_data from '../data/flags.json'


export default function Africa() {
  const [countries, setcountries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    for (let i = 0; i < flags_data.length; i++) {
      const preparedCountry = {};
      preparedCountry.country = flags_data[i].country;
      preparedCountry.region = flags_data[i].region;
      preparedCountry.flagUrl = flags_data[i].image_url;
      setcountries((preCountries) => [...preCountries, preparedCountry]);
    }
  }, []);

  return (
    <>
      <Head>
        <title>World Flags - Africa</title>
        <meta name="description" content="Country flags of Africa Region" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Title
          title_img="/africa@2x.png" 
          page_title="Africa Region" 
          button_title="Change Region"
        />
        <div className={styles.container}>
          {countries.map((f_data, index) => {
            return (
              <>
                <>
                {
                  f_data.region == "Africa" ? <div className={styles.box} id="box" key={index}>
                                                <div className={styles.flag_box}>
                                                  <img className={styles.image} src={f_data.flagUrl}></img>
                                                  <div className={styles.effect}></div> 
                                                </div>
                                                <div className={styles.country_font}>{f_data.country}</div>
                                                <div className={styles.region_font}>{f_data.region}</div>
                                              </div> : <></>
                }
                </>
              </>
            );
          })}
        </div>
        <Footer />
        
        
      </main>
    </>
  )
}
