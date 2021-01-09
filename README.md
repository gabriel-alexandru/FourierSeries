# Fourier Series

This is a simple representation of a mathematical function conceived by the mathematician Jean-Baptiste Joseph Fourier.

The concept behind it is that it is possible to sum up an infinite number of sine waves and at the end the result will be an approximation of a different wave, like a **Square Wave** or a **Sawtooth Wave**.

The formula of a Fourier Serie is:

<img src="https://latex.codecogs.com/png.latex?f%28t%29%20%3D%20C_0%20&plus;%20%5Csum_%7Bk%20%3D%201%7D%5E%7B%5Cinfty%7DC_k%5Csin%28k%20%5Comega%20t%20&plus;%20%5Cvarphi_k%29"/>

In the formula the *C<sub>0</sub>* is a constant value. *C<sub>k</sub>* is the coefficient that defines the resulting wave.

---

#### What are the coefficients for a Square Wave?

To obtain a Square Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:

<img src="https://latex.codecogs.com/png.latex?C_k%20%3D%200%20%5Cquad%20%5Ctext%7Bif%20%7D%20k%20%5Ctext%7B%20is%20even%7D" />


<img src="https://latex.codecogs.com/png.latex?C_k%20%3D%20%5Cfrac%7B4A_p%7D%7Bk%5Cpi%7D%20%5Cquad%20%5Ctext%7Bif%20%7D%20k%20%5Ctext%7B%20is%20odd%7D" />

---

#### What are the coefficients for a Sawtooth Wave?

To obtain a Sawtooth Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:


<img src="https://latex.codecogs.com/png.latex?C_k%20%3D%20%5Cfrac%7B2A_p%7D%7Bk%20%5Cpi%7D%20%5Cquad%20%5Ctext%7Bif%20%7D%20k%20%5Ctext%7B%20is%20even%7D" />

<img src="https://latex.codecogs.com/png.latex?C_k%20%3D%20%5Cfrac%7B2A_p%7D%7B-k%20%5Cpi%7D%20%5Cquad%20%5Ctext%7Bif%20%7D%20k%20%5Ctext%7B%20is%20odd%7D" />

---

#### How is the sketch made?

The sketch is made using the [**p5js library**](https://p5js.org).

To sum the different sine waves I used epicycles where the radius of each of them is the amplitude of each wave. The speed at which they rotate is equivalent to the frequency of that sine wave.

The trajectory described by the last epicycle is the resulting wave.

---

The sketch is available [**here**](https://gabrielalexandru.altervista.org/fourier)
 
