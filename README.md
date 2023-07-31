# Website VitalControl

This site holds the sources for the web site `www.vitalcontrol.de`.

## Running the website locally

### Prerequisites

Building and running the site locally requires a recent `extended` version of [Hugo](https://gohugo.io) (0.110.0 or higher).
You can find out more about how to install Hugo for your environment in our
[Getting started](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

Also make sure you installed [go language](https://go.dev/doc/install) (version `1.18` or higher) on your system.

Furthermore, you need to install the [latest long term support (LTS) Version](https://nodejs.org/en/about/releases/) of Node.js.

### Get website source repo

Clone a working copy of the site repo:

```bash
git clone https://git.urbanonline.de/vitalcontrol.de.git
```
### Install dependencies

Next install the two dependencies `autoprefixer` and `postcss-cli`:`

```bash
npm install
```

### Site preview

In order to preview the web site, issue this command:

```bash
hugo server
```

On first startup, hugo will download needed module dependencies, this is a may take a while.

Now open your web browser and type [http://localhost:1313](http://localhost:1313) in your navigation bar.
This opens a local instance of the VitalControl homepage. You can now make
changes to the source files and those changes will immediately show up in your
browser after you saved them (live reload).

## Deployment of the website

In order to deploy the web site, issue this command:

```bash
hugo
```

This will create a folder `public` at the root level of the site that helds the HTML sources of the web site.
Transfer the content of this folder to be web server hosting the site `vitalcontrol.de`.

## Theming

The VitalControl web site makes use of the [docsy][] hugo theme aimed at technical documentation projects.
It pulls in the theme component as a [hugo module](https://gohugo.io/hugo-modules/theme-components/).

## Troubleshooting

For troubleshooting purposes, it can be convenient to have the source code of the docsy repo locally in place.

To do so, clone the latest version of the docsy theme into the parent folder of the `vitalcontrol.de` project. The newly created repo should now reside in a sibling folder of our site's root folder.

```shell
cd /path/to/your/projects/
git clone --branch v0.7.1 https://github.com/google/docsy.git ../docsy
```

Now open the file `hugo.work`, located in the root of your site repo.
Uncomment the last line of this file, the content should look like this:

```
// running docsy theme locally (troubleshooting)
// uncomment line below for troubleshooting purposes
use ../docsy/
```

[docsy]: https://github.com/google/docsy
