# Fourier Series

This is a simple representation of a mathematical function conceived by the mathematician Jean-Baptiste Joseph Fourier.

The concept behind it is that it is possible to sum up an infinite number of sine waves and at the end the result will be an approximation of a different wave, like a **Square Wave** or a **Sawtooth Wave**.

The formula of a Fourier Serie is:
<img src="https://latex.codecogs.com/png.latex?f%28t%29%20%3D%20C_0%20&plus;%20%5Csum_%7Bk%20%3D%201%7D%5E%7B%5Cinfty%7DC_k%5Csin%28k%20%5Comega%20t%20&plus;%20%5Cvarphi_k%29"/>

In the formula the *C<sub>0</sub>* is a constant value. *C<sub>k</sub>* is the coefficient that defines the resulting wave.

---

#### What are the coefficients for a Square Wave?

To obtain a Square Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:
<img src="https://latex.codecogs.com/svg.latex?\Large&space;C_k = 0  \quad  \text{if } k \text{ is even} />


<img src="https://latex.codecogs.com/svg.latex?\Large&space;C_k = \frac{4A_p}{k\pi} \quad \text{if } k \text{ is odd} />

---

#### What are the coefficients for a Sawtooth Wave?

To obtain a Sawtooth Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:


<img src="https://latex.codecogs.com/svg.latex?\Large&space;C_k = \frac{2A_p}{k \pi} \quad \text{if } k \text{ is even} />

<img src="https://latex.codecogs.com/svg.latex?\Large&space;C_k = \frac{2A_p}{-k \pi} \quad \text{if } k \text{ is odd} />

---

#### How is the sketch made?

The sketch is made using the [**p5js library**](p5js.org).

To sum the different sine waves I used epicycles where the radius of each of them is the amplitude of each wave. The speed at which they rotate is equivalent to the frequency of that sine wave.

The trajectory described by the last epicycle is the resulting wave.

---

The sketch is available [**here**](https://editor.p5js.org/GabrielAlex/present/haRII4_AY)
 
