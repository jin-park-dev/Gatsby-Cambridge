<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Jin's CV - professional site.
</h1>


## 😍 See the live deployed sites here!


-   =====> [Homepage on Uni of Cam - DPMMS](https://www.dpmms.cam.ac.uk/person/jp835) <=====
-   =====> [Homepage on Surge](https://jin-dev.surge.sh/) <=====

## 🤔 Motivation

JAMStack is picking up noise in JS community. I wanted to make project with it but haven't had good reason until I found personal space at Maths department homepage with apache config. Their config does not allow django backend giving opporunity for me to build a page with a JAMStack.

## 🚀 Useful commands

1.  **Start developing.**

    ```
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
<br />
3.  **Build**

    ```
    gatsby build
    ```

4.  **Publish - Uploading to live (example only)** 
<br />
 
    1. ***Upload to University of Cambridge Maths - Personal public site.***  
    ```
    npm run deploy:cam
    ```
    2. ***Upload to surge***
    ```
    npm rum deploy:surge
    ```
    3. ***Both at same time***
    ```
    npm run deploy
    ```

Commands above will not work at the stage of publishing. (Builds wlll still happen)

Example only. There is personal CI pipeline with Gitlab and Jenkins outside of code.


## ⚠️ Issues

### Prefix

Currently as of development there is limitation with gatsby of uploading to two different sites, if one has prefix.

Requires "gatsby clean" or rm /.cache (same). This is not recommended by gatsby cli doc but required due to gatsby limitation of uploading to 2 different sites, with one being under prefix "~jp835"

It is not recommended because it takes long time for gatsby to generate cache from refresh, so "npm run start-clean" will take long time after "npm run deloy".

Fix requiring to run clean build for url prefix for dpmms (Cambridge math) site by only deploying CI. Now locally it will be safe to not have to clean cache as I am not deploying with image pre-fixes change.

e.g (prefix of ~jp835)
https://www.dpmms.cam.ac.uk/~jp835
https://www.dpmms.cam.ac.uk/~jp835/someStatic.jpg


Need to clean due to /prefix-path, that does not get regenerated. GraphQL generate images are using wrong path for Cambridge personal page (/~jp835) VS surge. (/)
https://github.com/gatsbyjs/gatsby/issues/2440


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
