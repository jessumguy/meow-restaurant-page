# 04 November 2024

Odin Project - Restaurant Page built using Webpack

[Demo page](https://jessumguy.github.io/meow-restaurant-page/)

https://github.com/user-attachments/assets/ecfe464d-7b83-49c4-ab61-b6568d95d04c

# Thoughts / Notes:

Spent a lot of time trying to style the containers, images, icons and also trying to make page responsive for mobile screens than on actual programming. 
- This [flexbox implementation](https://jsfiddle.net/przemcio/xLhLuzf9/3/) from StackOverflow was the solution in making the main content section of a page to automatically grow and take up all remainining space in a page.
- Also made use of Copilot to assist on programming when stuck.

Overall, pretty happy with how this turned out. Onto the next project!

# Notes on how to Deploy projects built using Webpack onto GitHub Pages:

1. Make a new branch to deploy from by running git branch gh-pages. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.

2. Make sure you have all your work committed. You can use git status to see if there’s anything that needs committing.
Run git checkout gh-pages && git merge main --no-edit to change branch and sync your changes from main so that you’re ready to deploy.

3. Now let’s bundle our application into dist with your build command. For now, that’s npx webpack.
Now there are a few more commands. Run each of these in order:

```
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

6. Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the gh-pages branch. That should be everything!