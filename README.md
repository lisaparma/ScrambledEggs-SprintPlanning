# Scrambled Eggs - Sprint Planning
React.js single-page app made _(with a lot of love)_ to help *Scrambled Eggs team*
to organize sprints without lose too much time in **very very
very difficult calculus** (like summary and percentage)!


### GH Page
Available on [this fantastic github page!](https://lisaparma.github.io/ScrambledEggs-SprintPlanning) :octocat:

### Features
- #### :pencil2: Edit 
    In every group you can *add* a mate and *delete* already in mate.
- #### :camera: Download as PNG
    You can save all page as PNG.
    >This feature in made with [html2canvas](https://html2canvas.hertzen.com) library that has some problem to render icon
    so you will see beautiful squares instead of icons. This is considered a feature inside the feature obviously. :woman_shrugging:
- #### :arrow_up: Upload JSON
    You can upload your json file with all the information about your team!
    
    The file has to have with this structure:
    ```json
  {
      "teamName": "DreamTeam",
       "date": "1855-2-19",    
       "groups": {      
           "group1": {
               "name": "Front-end",
               "mates": ["marioID", "carlID"],
               "emergency": 20
           },
           "group2": {
               "name": "Back-end",
               "mates": ["luigiID", "annaID"],
               "emergency": 10
           }
        },
       "people": {
           "marioID": {
               "name": "Mario",
               "d": 10,
               "h": 0,
               "efficiency": 90
            },
            "carlID": {
                "name": "Carl D.",
                "d": 9,
                "h": 4,
                "efficiency": 80
            },
            "luigiID": {
                "name": "Luigi",
                "d": 10,
                "h": 0,
                "efficiency": 70
            },
            "annaID": {
                "name": "Anna",
                "d": 8,
                "h": 0,
                "efficiency": 80
            }
        }
  }
    
    ```
    
    | Properties    | Required      | Default value          |
    | ------------- |:-------------:| -----------------------|
    | `teamName`    | Optional      |  _DreamTeam_     |
    | `date`        | Optional      | Today's date     |
    | `groups`      | Optional      | A single group with all the people |
    | `people`      | *Required*    |                               |
