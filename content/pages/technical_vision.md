Title: Technical Vision

Photographers use the Japanese word “bokeh” to describe the blurring of the
out-of-focus parts of an image. Its aesthetic quality can greatly enhance a
photograph, and photographers artfully use focus to draw attention to subjects
of interest. “Good bokeh” contributes visual interest to a photograph and
places its subjects in context.

In this vein of focusing on high-impact subjects while always maintaining a
relationship to the data background, Bokeh and related projects attempt to 
address fundamental challenges of visualization, including large or streaming
data.

##### How do we look at all the data?

  * What are the best perceptual approaches to honestly and accurately represent the data to domain experts so they can apply their intuition to the data?
  * Are there automated approaches to accurately reduce large datasets so that outliers and anomalies are still visible, while we meaningfully represent baselines and backgrounds? How can we do this without “washing away” all the interesting bits during a naive downsampling?
  * If we treat the pixels and topology of pixels on a screen as a bottleneck in the I/O channel between hard drives and an analyst’s visual cortex, what are the best compression techniques at all levels of the data transformation pipeline?

Some of the core ideas for the adressing these questions are implemented in a 
standalone library, and are being developed under the term “Datashader”. For more
information, you can visit the [Datashader GitHub page](//github.com/bokeh/datashader).

##### How can scientists and data analysts be empowered to use visualization fluidly, not merely as an output facility or one stage of a pipeline, but as an entire mode of engagement with data and models?

  * Are language-based approaches for expressing mathematical modeling and data transformations the best way to compose novel interactive graphics?
  * What data-oriented interactions (besides mere linked brushing/selection) are useful for fluid, visually-enable analysis?

The Bokeh core library addresses these questions by affording sohpisticated 
capabilities for interactions, both in standalone HTML documents, and in rich
data applications hosted on a Bokeh server. You can see examples of live Bokeh
applications at [demo.bokehplots.com](//demo.bokehplots.com/).

Bokeh is one of several open-source components of the broader technical vision
of [Continuum Analytics](//continuum.io). By providing powerful parallel and vector
computing on remote and distributed data via [Dask](//dask.pydata.org/en/latest/) 
and [Numba](//numba.pydata.org), affording interactive visualizations of them 
via Bokeh, and making everything easily deployable with [conda](//conda.pydata.org/docs),
we enable teams to collaboratively perform rich analysis, share them with  others 
(potentially non-technical members of their team or business), and rapidly create 
analytical dashboards and monitoring interfaces.
