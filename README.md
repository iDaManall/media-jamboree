# Web Development Project 7 - *Media Jamboree*

Submitted by: **Samiul Saimon**

This web app: **A simple community website for sharing all kinds of media and discovering something new.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form allows users to add new cremates**
- [X] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [X] **The site displays a summary page of all the user's added crewmates**
- [X] **A previously created crewmate can be updated from the crewmate list**
- [X] **A previously created crewmate can be deleted from the crewmate list**
- [X] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [X] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Week7_media-jamboard](https://github.com/user-attachments/assets/c8d0cf83-7842-4796-8165-393d63c473fc)
Better Quality Video: https://drive.google.com/file/d/14LSPJGV-9Yd3U_jIALYPdIOUqcxLZE-R/view?usp=sharing

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Mac Screen Recorder and ezgif converter  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
I used npm start to run the project. Client.js needs to be included with the url and api key for the database defined. 

This was the one of the first fullstack applications I built utilizing supabase as the backend. I quickly realized that I had to fetch data from the database instead pre-existing states from the useState hooks if I wanted the information to stay on the website even after refreshing. I also learned nesting Links does not work as intended and used useNavigate from react-router-dom (navigates to a certain url) and event.stopPropagation (stops the card's onclick event from being triggered when the edit/like functionality were executing) to work around this. Also practiced fetching data from the database and form syntax such as label, input, etc. 

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
