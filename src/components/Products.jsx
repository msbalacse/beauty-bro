import { Container, Grid } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Container className="my-8">
            <div className="flex flex-col gap-4 items-center justify-center my-[6rem]">
                <p className="font-light tracking-widest font-Inter">Naturally You</p>
                <h1 className="mb-6 text-4xl font-bold text-center text-red-600 md:text-6xl font-Butler ">
                    What Our Magicians Can, Do you know
                </h1>
            </div>
            <Grid container spacing={2}>
                <Grid item md={6} className="h-[400px]">
                    <img
                        src="https://image3.jdomni.in/banner/18102020/65/B8/A9/A909C2F72AB085B0C0502E160B_1603045556906.jpg?output-format=webp"
                        alt="girl"
                        className="object-cover w-full h-full"
                    />
                </Grid>
                <Grid item md={6}>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-red-600">EXCLUSIVELY BRIDAL</h1>
                        <p className="text-sm">
                            Exclusively Bridal is a premier bridal boutique dedicated to providing an exceptional and
                            personalized shopping experience for brides-to-be. The boutique prides itself on offering an
                            extensive collection of designer wedding gowns, bridesmaid dresses, and bridal accessories
                            that cater to various styles, preferences, and budgets.
                        </p>
                        <ul className="p-4 text-sm list-disc">
                            <li className="">A diverse selection of wedding dresses from renowned designers.</li>
                            <li>Styles ranging from classic and timeless to modern and trendy.</li>
                            <li>Customization options to ensure a perfect fit and unique look.</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item md={12}>
                    <img
                        src="https://image3.jdomni.in/banner/11082021/DA/1A/50/1461D8332DB525A423B91B336B_1628695453491.jpg?output-format=webp"
                        alt="asdf"
                        className="object-cover w-full"
                    />
                </Grid>
                <Grid item md={6}>
                    <h1 className="mt-8 mb-6 text-4xl text-red-600 md:text-6xl font-Butler ">Diverse selection</h1>
                    <p className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ratione fugit inventore.
                        Exercitationem soluta delectus suscipit quisquam nemo aliquid mollitia libero consequatur
                        dolores facere fugit rem, velit omnis tempore maxime.
                    </p>
                </Grid>
                <Grid item md={6} className="h-[500px]">
                    <img
                        src="https://image3.jdomni.in/banner/11082021/61/11/83/28C9CD7B8C1C64D44A721676C4_1628693666351.jpg?output-format=webp"
                        alt="hand"
                        className="object-cover object-top w-full h-full"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Products;
