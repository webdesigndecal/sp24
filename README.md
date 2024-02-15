# Spring 2024 Web Design Decal Resources

## To add a new assignment:

1. Add the folder containing instructions into the assignments folder.
1. Go to the script.js file in the root of /assignments. 
1. Edit line 2 with the correct assignment name: accepted types are:
    - `hw{number}`
    - `lab{number}`
    - `midterm`
    - `final`
    - Ex. `hw1`, `lab10`, `final`.
1. Add, commit, and push your changes.

## To create a new semester resource repo
1. Mirror this repository.
    1. Create a new repository on the webdesigndecal Github organization. 
    1. Open your terminal to a directory of your choice (ex. `Documents/wdd`)
    1. Run `git clone --bare https://github.com/webdesigndecal/sp24.git`
    1. `cd sp24`
    1. Run `git push --mirror https://github.com/webdesigndecal/fa24.git`
    1. `cd ..`, and `rm -rf sp24`
1. Delete all folders inside of the `/assignments` folder, and reset the array in `assignments/script.js` to an empty array.
1. Update this README and index files changing **sp24** to **fa24**.