import React from 'react'
import classes from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={classes.home}>
        <div className={classes.header}>
            <div className={classes.subHeader}>
                <a href='#'>Shop</a>
                <a href='#'>Read</a>
                <a href='#'>Stores</a>
                <a href='#'>Search</a>

            </div>
            <div className={classes.subHeader}>
                <a href='#'>Login</a>
                <a href='#'>Cabinet</a>
                <a href='#'>Cart</a>

            </div>
            </div> 
            <div className={classes.section1}>
                <div className={classes.section1_first}>
                    <h2>Aesop.</h2>
                </div>
                <div className={classes.section1_second}>
                    <h4>Bar Scops</h4>
                    <h3> A Body care classic, reimagined</h3>
                    <div className={classes.section1_second_paragh}>
                    <p>Breathing new life into the humble bar soap are
                        Nurture, Polish and Refresh--three additions to 
                        the range, each imparting a unique constellaion of benefits.
                    </p>
                    <span style={{borderWidth:"1px",borderStyle:"solid",borderColor:"black",padding:"20px",fontWeight:"bold"}}>Discover Bar Soaps   <input value="->" style={{width:"20px",background:"transparent",marginLeft:"50px"}}/></span>

                    </div>
                </div>
            </div>
            <div className={classes.section2}>
                <div className={classes.section2_first}>
                    <h2>
                        For the body
                    </h2>
                    <p>
                        An expression care
                    </p>

                </div>
                <div className={classes.section2_second_paragh}>
                    <p>
                        Aesop formulations offerr the body deserving care, to cleanse,
                   
                    replenish, and nourish skin. Each product is a sensory plesure to use 
                    with its own delightful aroma.
                    </p>

                    <span style={{padding:"20px",fontWeight:"bold"}}>See all Body Care   <input value="->" style={{width:"20px",background:"transparent",marginLeft:"50px"}}/></span>

                </div>

            </div>
            <div>
            <div className={classes.section3}>
                <div className={classes.section3_card}>
                    <h2>Aesop    </h2>
                    <div className={classes.section3_card_P}>
                        <div style={{backgroundColor:"black",color:"white"}}>
                        <h3 >Nurture Bar Soap</h3>
                        <p style={{fontSize:"15px"}}>Savon Nourrissant</p>
                        </div>
                        <p style={{fontWeight:"bold"}}>Rosemary Leaf .Cedar Atlas . Lavender Stem</p>
                        <p>Feulle de Romarin.Cedre de I'Altlas . Tige de Lavande</p>
                        <p style={{backgroundColor:"black",color:"white",padding:"4px"}}>This non-perturbing soap is suitable for most skin types, particularly dey-- whether in the shower in the shower or bath, or at the basin. Formulated to cleanse gently without stripping. herbaceous notes and leaves
                            skin impeccably soft. After lathering, rinse thoroughly;follow with generous application of your favourite Aesop
                            hand or body hydrator. </p>
                            <p>Ce savon non-perturbant est adapte a la plupart des peaux, notamment seches--que ce soit dans le bain,
                                sous la douche ou au lavabo. Concu pour nettoyer la peau an douceur sans la decaper, il lui confere 
                                aromes boises et herbraces et lui rend toute sa douceur. Apres I' avoir fait mousser, rincez abondamment ;
                                terminez avec le soin hydratant Aesop pour les mains ou le corps de votre choix.
                            </p>

                    </div>

                </div>

               
                <div>
                <div className={classes.section3_card}>
                    <h2>Aesop    </h2>
                    <div className={classes.section3_card_P}>
                        <div style={{backgroundColor:"black",color:"white"}}>
                        <h3 >Nurture Bar Soap</h3>
                        <p style={{fontSize:"15px"}}>Savon Nourrissant</p>
                        </div>
                        <p style={{fontWeight:"bold"}}>Rosemary Leaf .Cedar Atlas . Lavender Stem</p>
                        <p>Feulle de Romarin.Cedre de I'Altlas . Tige de Lavande</p>
                        <p style={{backgroundColor:"black",color:"white",padding:"4px"}}>This non-perturbing soap is suitable for most skin types, particularly dey-- whether in the shower in the shower or bath, or at the basin. Formulated to cleanse gently without stripping. herbaceous notes and leaves
                            skin impeccably soft. After lathering, rinse thoroughly;follow with generous application of your favourite Aesop
                            hand or body hydrator. </p>
                            <p>Ce savon non-perturbant est adapte a la plupart des peaux, notamment seches--que ce soit dans le bain,
                                sous la douche ou au lavabo. Concu pour nettoyer la peau an douceur sans la decaper, il lui confere 
                                aromes boises et herbraces et lui rend toute sa douceur. Apres I' avoir fait mousser, rincez abondamment ;
                                terminez avec le soin hydratant Aesop pour les mains ou le corps de votre choix.
                            </p>

                    </div>

                </div>
                </div>
                </div>
                <div>

                </div>
            </div>
      
    </div>
  )
}
