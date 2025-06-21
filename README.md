Use It in Another Project
🔹 Option 1: Use GitHub as a package

In another project, install directly:
```
npm install git+https://github.com/pangphannarupp/web-framework.git
```
You must ensure:
Your package.json is configured with correct main, module, types.
You build it first, or include dist/ in the repo.
🔸 If dist/ is not included, the consuming project will need to build it (not ideal for libraries).

🔹 Option 2: Use GitHub Releases + Prebuilt dist
Build your library:

```
npm run build
```

Commit the dist/ folder (for release only!):

```
git add dist/
git commit -m "Include built files"
git tag v1.0.0
git push origin main --tags
```

In your other project, install from tag:
```
npm install git+https://github.com/pangphannarupp/web-framework.git#v1.0.0
```