import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import { Card, Stack, Image, Heading, Text, Button, CardBody ,CardFooter,Grid,GridItem} from '@chakra-ui/react';


const Homepage = () => {
    const [resdata, setResdata] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5OTA3NzI1NiwiZXhwIjoxNzA2MzM0ODU2fQ.bdGB6gYuLIkLiC_reFgp6S0RxjDSs67tf_NEb_fSo00"
		useEffect(() => {
			fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118");

			fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118", {
				headers: { Authorization: `Bearer ${token}` },
			})
				.then((resp) => resp.json())
				.then((json) => setResdata(json));
		}, []);

	return (
		<div className={styles.main}>
			<div className={styles.navbar}>
				<h6>
					Pre Order from{" "}
					<span>
						<i className="fas fa-user"></i>
					</span>
				</h6>
				<h5>Connaught Place</h5>
			</div>
			<div className={styles.name}>
				<div>
					<h3>Karan</h3>
					<h5>Let's explore this evening</h5>
				</div>
				<div className={styles.icons}>
					<div>
						<img
							src="https://img.freepik.com/premium-vector/special-offer-label-icon-flat-style-discount-banner-vector-illustration-isolated-background-sale-sign-business-concept_157943-577.jpg"
							alt=""
							width="50px"
							height="50px"
						/>
						<p>Special Offers</p>
					</div>
					<div>
						<img
							src="https://icons.veryicon.com/png/o/business/work-circle/ethereum-wallet.png"
							alt=""
							width="50px"
							height="50px"
						/>
						<p>Wallet</p>
					</div>
				</div>
			</div>

            <div className={styles.box}>
                <div className={styles.boxText}>
                    <p>Your tase</p>
                    <p> <span><i className="fas fa-chevron-right"></i></span>see all</p>
                </div>
                <div className={styles.diplayGrid}>
                <div className={styles.verticalCard}>
                    <img src="https://s3-alpha-sig.figma.com/img/a25f/9d25/01c2dd2d51c72422508105fa7b2d079f?Expires=1699833600&Signature=J~Y8xP5AidOc1kRcaG-Si4M7elAGqBMyA6FWVxIH5GjxNnsMBX1-AWVy1ai09xv2U9l58acqQEW5-QJ2GUFXs-sPkwewXyOqwDYcfcvZxbPdgyhs-PgvTAwJx7U4EO5DyioyJTRcBtWVgTqmoDdkW5cKvgEnKdFb-j9Arght9Dwb2SGUTZLgEvKrB7LPI2xXAidnZHmWnN3gTY0wloP071WMa449jaelloioc3bwFMlYZZwI03~pRkKtfwi8Kl9YWyUB6tXq4nXZHSb1H2B4ZkattsQAnlxl-ncUChldTo-aN1XpgX8H~HJbjd5-d~mwlnTcXbV0U4YBptcBWb1kkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""  />
                    <div style={{width:'100%',height:'70px',lineHeight:'14px',backgroundColor: '#FFB6C1'}}>
                        <p style={{padding:'10px 0px 0px 10px'}}>Nik Bakers</p>
                        <p style={{fontSize:"12px",lineHeight:'14px',paddingLeft:'10px'}}>Cannought Place New Delhi</p>
                    </div>
                </div>
                <div className={styles.verticalCard}>
                    <img src="https://s3-alpha-sig.figma.com/img/a25f/9d25/01c2dd2d51c72422508105fa7b2d079f?Expires=1699833600&Signature=J~Y8xP5AidOc1kRcaG-Si4M7elAGqBMyA6FWVxIH5GjxNnsMBX1-AWVy1ai09xv2U9l58acqQEW5-QJ2GUFXs-sPkwewXyOqwDYcfcvZxbPdgyhs-PgvTAwJx7U4EO5DyioyJTRcBtWVgTqmoDdkW5cKvgEnKdFb-j9Arght9Dwb2SGUTZLgEvKrB7LPI2xXAidnZHmWnN3gTY0wloP071WMa449jaelloioc3bwFMlYZZwI03~pRkKtfwi8Kl9YWyUB6tXq4nXZHSb1H2B4ZkattsQAnlxl-ncUChldTo-aN1XpgX8H~HJbjd5-d~mwlnTcXbV0U4YBptcBWb1kkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""  />
                    <div style={{width:'100%',height:'70px',lineHeight:'14px',backgroundColor: '#FFB6C1'}}>
                        <p style={{padding:'10px 0px 0px 10px',}}>Nik Bakers</p>
                        <p style={{fontSize:"12px",lineHeight:'14px',paddingLeft:'10px',}}>Cannought Place New Delhi</p>
                    </div>
                </div>
                <div className={styles.verticalCard}>
                    <img src="https://s3-alpha-sig.figma.com/img/a25f/9d25/01c2dd2d51c72422508105fa7b2d079f?Expires=1699833600&Signature=J~Y8xP5AidOc1kRcaG-Si4M7elAGqBMyA6FWVxIH5GjxNnsMBX1-AWVy1ai09xv2U9l58acqQEW5-QJ2GUFXs-sPkwewXyOqwDYcfcvZxbPdgyhs-PgvTAwJx7U4EO5DyioyJTRcBtWVgTqmoDdkW5cKvgEnKdFb-j9Arght9Dwb2SGUTZLgEvKrB7LPI2xXAidnZHmWnN3gTY0wloP071WMa449jaelloioc3bwFMlYZZwI03~pRkKtfwi8Kl9YWyUB6tXq4nXZHSb1H2B4ZkattsQAnlxl-ncUChldTo-aN1XpgX8H~HJbjd5-d~mwlnTcXbV0U4YBptcBWb1kkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""  />
                    <div style={{width:'100%',height:'70px',lineHeight:'14px',backgroundColor: '#FFB6C1'}}>
                        <p style={{padding:'10px 0px 0px 10px',}}>Nik Bakers</p>
                        <p style={{fontSize:"12px",lineHeight:'14px',paddingLeft:'10px',}}>Cannought Place New Delhi</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.tryNowpic}>
            <img src="https://s3-alpha-sig.figma.com/img/a25f/9d25/01c2dd2d51c72422508105fa7b2d079f?Expires=1699833600&Signature=J~Y8xP5AidOc1kRcaG-Si4M7elAGqBMyA6FWVxIH5GjxNnsMBX1-AWVy1ai09xv2U9l58acqQEW5-QJ2GUFXs-sPkwewXyOqwDYcfcvZxbPdgyhs-PgvTAwJx7U4EO5DyioyJTRcBtWVgTqmoDdkW5cKvgEnKdFb-j9Arght9Dwb2SGUTZLgEvKrB7LPI2xXAidnZHmWnN3gTY0wloP071WMa449jaelloioc3bwFMlYZZwI03~pRkKtfwi8Kl9YWyUB6tXq4nXZHSb1H2B4ZkattsQAnlxl-ncUChldTo-aN1XpgX8H~HJbjd5-d~mwlnTcXbV0U4YBptcBWb1kkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""  width="95%" height="100%" style={{objectFit:'cover',margin:'auto',borderRadius:'18px'}} />
                
            </div>
            <div>
                <h6>Popular Ones</h6>
                
            </div>
		</div>
	);
};

export default Homepage;
