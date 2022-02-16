import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Title from '../components/Title';
import Layout from "../components/Layout";
import ProductCardGrid from '../components/ProductCardGrid';

import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {

  const [showFilter, setShowFilter] = useState(false);
  const data = generateMockProductData(6, 'woman');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if(e?.keyCode === undefined) return;
    if(e.keyCode === 27) setShowFilter(false);
  }
  
  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs crumbs={[{link: '/', label:'Home'}, {link: '/', label:'Woman'}, {label:'Sweaters'}]} />
        </Container>
        <div className={styles.bannerContainer}>
          <Title 
            maxWidth={'650px'}
            name={`Woman's Sweaters`} 
            subtitle={'Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'} 
            />
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>476 items</span>
            <div className={styles.controllerContainer}>
              <div className={styles.iconContainer} role={'presentation'} onClick={()=>setShowFilter(!showFilter)}>
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div className={styles.iconContainer}>
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>
          <CardController closeFilter={()=>setShowFilter(false)} visible={showFilter} filters={Config.filters} />
          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>
          <div className={styles.productContainer}>
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>LOAD MORE</Button>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
