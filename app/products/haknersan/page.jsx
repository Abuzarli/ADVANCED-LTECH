'use client'
import { Grid } from '@mui/material'
import './index.scss'
import { getAllHaknersanProducts } from '@/api/haknersanRequests'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ProdTitle from '@/product-component/prod-title'
import { MoonLoader } from 'react-spinners'

const HAKNERSAN = () => {

  const [haknersanProducts,setHaknersanProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllHaknersanProducts()
      .then((res) => {
        setHaknersanProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setHaknersanProducts]);

  return (
    <section>
        <title>Haknersan-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

            <ProdTitle/>

      
      {loading ? (
                <MoonLoader
                className='loading'
                color={"#5DDAC9"}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
      ) : (
        <div className='all-products' style={{ marginBottom: '100px' }}>
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {haknersanProducts &&
              haknersanProducts.map((haknersanProduct) => (
                <Grid key={haknersanProduct._id} item lg={3}>
                  {/* Haknersan Product Card */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={haknersanProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{haknersanProduct.name}</p>

      <Link href={haknersanProduct.link} class="card-btn">
      <FontAwesomeIcon icon={faCircleInfo} />
        <span class="card-btn-text">Məhsula Bax</span>
      </Link>
    </div>
                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </section>
  );
}

export default HAKNERSAN;