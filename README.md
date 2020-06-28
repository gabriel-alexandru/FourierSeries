# Fourier Series

This is a simple representation of a mathematical function conceived by the mathematician Jean-Baptiste Joseph Fourier.

The concept behind it is that it is possible to sum up an infinite number of sine waves and at the end the result will be an approximation of a different wave, like a **Square Wave** or a **Sawtooth Wave**.

The formula of a Fourier Serie is:
$$
f(t) = C_0 + \sum_{k = 1}^{\infty}C_k\sin(k \omega t + \varphi_k)
$$

In the formula the *C<sub>0</sub>* is a constant value. *C<sub>k</sub>* is the coefficient that defines the resulting wave.

---

#### What are the coefficients for a Square Wave?

To obtain a Square Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:
$$
C_k = 0  \quad  \text{if } k \text{ is even}
$$

$$
C_k = \frac{4A_p}{k\pi} \quad \text{if } k \text{ is odd}
$$

---

#### What are the coefficients for a Sawtooth Wave?

To obtain a Sawtooth Wave from the formula above ***C<sub>k</sub>*** need to be calculated with this two formulas:

$$
C_k = \frac{2A_p}{k \pi} \quad \text{if } k \text{ is even}
$$

$$
C_k = \frac{2A_p}{-k \pi} \quad \text{if } k \text{ is odd}
$$

---

#### How is the sketch made?

The sketch is made using the [**p5js library**](p5js.org).

To sum the different sine waves I used epicycles where the radius of each of them is the amplitude of each wave. The speed at which they rotate is equivalent to the frequency of that sine wave.

The trajectory described by the last epicycle is the resulting wave.

---

The sketch is available [**here**](https://editor.p5js.org/GabrielAlex/present/haRII4_AY)
 
