"use client";

import styles from './layout';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiOutlineQq } from 'react-icons/ai';
import {AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import raisaimg from '../public/raisa.png';
import design from '../public/school.png';
import college from '../public/college.png';
import consult from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import portfolio from '../public/portfolio.png'
import project_dict from '../public/project_dict.png';
import recipe_finder from '../public/recipe_finder.png';
import exam_cell from '../public/exam_cell.png'
import to_do_list from '../public/to_do_list.png'
import work from '../public/work.png'
import group from '../public/group.png'
import cultural from '../public/cultural.png'
import debate from '../public/debate.png'
import { useState } from 'react';


export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=' bg-zinc-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-serif' >
      {/* SECTION 1 */}
      
      <section className=''>
        <nav className=' py-14 mb-12 flex justify-between'>
          <h1 className=' text-2xl font-burtons text-gray-700 dark:text-gray-200'>Raisa's Portfolio</h1>
          <ul className=' flex items-center'>
            <li className='text-gray-700 dark:text-gray-200 pl-10'>
              <BsFillMoonStarsFill className=' cursor-pointer text-2xl' onClick={()=>setDarkMode(!darkMode)}></BsFillMoonStarsFill>
            </li>
            <li><a className=' bg-gradient-to-r from-amber-200 to-pink-600 text-right px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r dark:from-amber-100 dark:to-pink-100' href='https://drive.google.com/drive/folders/1KgwK95YipA0xpo9x-b7vihXUPQuFttsN?usp=sharing'>Resume</a></li>
          </ul>
        </nav>

        <div className=' text-center p-2'>
          <h2 className=' text-5xl py-2 text-pink-600 font-medium md:text-6xl lg:text-10xl dark:text-amber-100'>Raisa Ghosh</h2>
          {/* <h3 className=' text-2xl py-2 md:text-3xl lg:text-4xl dark:text-gray-50'>Student</h3> */}
          <p className=' text-base pt-5 mb:pt-7 pb-3 leading-8 text-gray-700  md:text-xl lg:text-xl max-w-lg mx-auto dark:text-gray-200'>Hi(নমস্কার🌟) </p>
          <p className=' text-base pt-0 pb-5 leading-8 text-gray-700  md:text-xl lg:text-xl max-w-lg mx-auto dark:text-gray-200'>Thank you for stopping by! Still have a lot to learn but I appreciate you taking out time to see what I've been up to.</p>
        </div>

        <div className=' font-semibold text-5xl flex justify-center gap-16 text-gray-700 dark:text-gray-200'>
          <a href='https://www.linkedin.com/in/raisaghosh11/'><AiFillLinkedin></AiFillLinkedin></a>
          <a href='https://github.com/RaisaGhosh'><AiOutlineGithub></AiOutlineGithub></a>
        </div>

        <div className=' relative pb-20 md:pb-32'>
          <Image className='bg-gradient-to-r from-zinc-50 to-zinc-50 dark:bg-gradient-from-amber-50 dark:to-pink-50 rounded-full w-48 h-48 mt-12 mx-auto md:w-56 md:h-56 lg:w-56 lg:h-56' src={raisaimg} alt="my animated photo"/>
        </div>

      </section>

      {/* SECTION 2 */}

      <section>

        <div>
          <h3 className=' text-3xl py-1 dark:text-gray-50'>Education</h3>
        </div>

        <div className='lg:flex gap-10'>
        <div className=' text-left shadow-lg p-10 rounded-xl my-10 lg:w-1/2 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={college} width={160} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>Undergraduate</h3>
            <p className=' text-base text-amber-600 '><a href='https://drive.google.com/drive/folders/1EYBDxtvKUvfDCNdk4Vv7CkXoJ1AQd8pg?usp=drive_link' className=' font-bold underline'>Bachelor of Computer Science & Engineering</a></p>
            <p className=' text-sm text-gray-400 '>2020-2024</p>
            <ul className=' pt-5 text-gray-700 list-disc'>
              <li>1st Semester - 9.07/10</li>
              <li>2nd Semester - 9.52/10</li>
              <li>3rd Semester - 9.49/10</li>
              <li>4th Semester - 9.52/10</li>
              <li>5th Semester - 9.87/10</li>
              <li>6th Semester - 9.88/10</li>
            </ul>
          </div>
          <div className=' text-left shadow-lg p-10 rounded-xl my-10 lg:w-1/2 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={college} width={160} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>High School</h3>
            <p className=' text-amber-600 '><a href='https://drive.google.com/drive/folders/1_eJO-w4OTOoIY2qGR0_1WaRN0aKqdqCG?usp=drive_link' className=' font-bold underline'>Science & Computer Science</a></p>
            <p className=' text-sm text-gray-400 dark:text-gray-400'>2018-2020</p>
            <ul className=' pt-5 text-gray-700  list-disc'>
              <li>Computer Science - 100/100</li>
              <li>Math - 94/100</li>
              <li>Chemistry - 95/100</li>
              <li>Physics - 91/100</li>
              <li>English - 90/100</li>
              <li>Hindi - 89/100</li>
            </ul>
          </div>
        </div>

      </section>


      {/* SECTION 3 */}

      <section className=' pt-10'>

        <div>
          <h3 className=' text-3xl py-1 dark:text-gray-50'>Work Experience</h3>
        </div>

        <div className='lg:flex-row lg:flex-wrap gap-10'>
        <div className=' text-left shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={work} width={140} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>Algorithm Design and Development Intern</h3>
            <p className=' text-base text-amber-600 '>Praxis Business School</p>
            <p className=' text-sm text-gray-400 '>July,2022 - September,2022</p>
            <ul className=' pt-5 text-gray-700 list-disc'>
              <li>Contributed to <a href='https://www.linkedin.com/feed/update/urn:li:activity:7013049400847466496?utm_source=share&utm_medium=member_desktop#:~:text=Meanwhile%2C%20Raisa,for%20this%20work.' className=' font-bold text-gray-800 underline'>Basket-Recipe Recommender System</a> by automating and optimizing the data collection pipeline.</li>
              <li>Conducted thorough research and analysis to understand the requirements and objectives of the project.</li>
              <li>Developed a comprehensive roadmap for the development of an algorithm designed to identify and select popular dishes, extract relevant information from the internet about these dishes, and utilize the Parts of Speech (POS)
tagging algorithm to identify the corresponding ingredients.
</li>
              <li>Designed and implemented a sophisticated algorithm using Object Oriented Approach, delivering the solution 30 days ahead of schedule.</li>
              <li>Proposed and presented a highly efficient parallel processing model to the team, subsequently gaining approval for its
implementation.</li>
<li>Implemented the parallel processing model which reduced the total execution time by an impressive 400%</li>
              <li>Documented the algorithm development process, including methodologies, data sources, and techniques utilized, en-
suring clarity and reproducibility.</li>
              <li>Collaborated cross-functionally to conduct extensive testing and evaluation to validate the accuracy and reliability of
the algorithm.</li>
<li>Ended the internship by presenting the algorithm's capabilities and findings.</li>
            </ul>
          </div>
          <div className=' text-left shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={work} width={140} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>Team Lead</h3>
            <p className=' text-base text-amber-600 '>Smart India Hackathon</p>
            <p className=' text-sm text-gray-400 '>April 2022</p>
            <ul className=' pt-5 text-gray-700 list-disc'>
              <li>Proposed a solution to one of the problem statements by <a href='https://www.aicte-india.org/' className=' font-bold text-gray-800 underline'>All India Council for Technical Education (AICTE)</a> that primarily served as a tool for AICTE to surveillance the projects being made in the different colleges.</li>
              <li> Did market research to identify products similar to our product idea. Conducted surveys within the community in order to gain insight into the features that users desired but found lacking.</li>
              <li>Analyzed the available products to understand what worked for them, what didn't, and why was a certain feature missing, was it because of past failure, and if so, what led to the failure etc.</li>
              <li>Using the Google Design Sprint Methodology, designed a product development roadmap, along with a business and revenue plan that the organization can reference to if they decide to implement the platform on a large scale.</li>
              <li>Worked with the team to implement <a href='https://drive.google.com/file/d/128bkSA4Ym5HU2DL5p5Cci8rUZGwOEilX/view?usp=drive_link' className=' font-bold text-gray-800 underline'>a basic prototype using Draftium</a> demonstrating the UI, wireframe and flow of the recommended product/platform.</li>
<li>Pitched the product idea on behalf of my team to a panel of 5 judges and an audience of approximately 200 people.
</li>
              <li>Locally, out of 35 participating teams, placed 1st. Nationwide, placed at 8th position from 700+ teams participating.</li>
            </ul>
          </div>
        </div>

      </section>

      {/* SECTION 4 */}
      
      <section className=' pt-10'>

        <div>
          <h3 className=' text-3xl py-1 dark:text-gray-50'>Projects</h3>
        </div>

        <div className='py-2 lg:flex-row lg:flex-wrap'>

        <div className=' text-left shadow-lg p-10 rounded-xl my-10  bg-amber-100'>
          <h3 className=' py-2 text-amber-600 font-extrabold'>Portfolio : </h3>
          <ul className=' py-2 pt-5 text-gray-700 list-disc'>
            <li>The website you are currently viewing.</li>
            <li>Made Using React and Tailwind CSS.</li>
            <li>Click <a href='https://raisaghosh.github.io/portfolio/' className=' font-bold text-gray-800 underline'>here</a> for recursion!</li>
          </ul>
          </div>
          {/* <div className='flex-1'>
          <a href='https://github.com/RaisaGhosh/Web-Scraping-Recipe-Links/tree/master'><Image className=' rounded-lg object-cover' style={{
              width: '100%',
              height: '100%',
            }} 
            src={portfolio} alt="" /></a>
        </div> */}

        <div className=' text-left shadow-lg p-10 rounded-xl my-10  bg-pink-100'>
          <h3 className=' py-2 text-pink-600 font-extrabold'>Project Dictionary : </h3>
          <ul className=' py-2 pt-5 text-gray-700 list-disc'>
            <li>A platform for students to upload their projects with a title, brief description, and an image. Update and Like features are also available.</li>
            <li>Set up the database using MongoDB Atlas and connected it to the application server. Defined the MongoDB Schema for application.</li>
            <li>Set up the different routing paths for different requests like getPosts, createPost, updatePost, deletePost, and likePost.</li>
            <li>Defined the different controllers that will be executed for the different routing paths which will help interact with the database and send back necessary information to the client.</li>
            <li>Set up the Form component, the Posts component, and the individual Post component used in the Posts component. Used Material UI with JSX for styling the components.</li>
            <li>Set up the API for getPosts, createPost, updatePost, deletePost, and likePost (basic CRUD Operations) to connect to the backend.</li>
            <li>Used Redux to create a global store. Implemented the concept of constants before the action creation part to avoid naive errors due to misspelled words.</li>
            <li>Created the actions for getPosts, createPost, updatePost, deletePost, likePost, and their respective reducers.</li>
            <li>Updated the components Form and Post (inside Posts component) with the dispatch functionality so that now calls can be made to the different actions which in turn can call the respective reducers.</li>
            <li>Created a .env file to secure the database password before making the final commit to the GitHub repository.</li>
            <li>Deployed backend and made necessary changes to client API for establishing a proper connection.</li>
            <li>Created the build version of the front end and deployed it for public access.</li>
            <li>Click on the image below for more details!</li>
          </ul>
          </div>
          <div className=' basis-1/1 flex-1'>
          <a href='https://github.com/RaisaGhosh/PROJECT-DICTIONARY'><Image className=' rounded-lg object-cover' style={{
              width: '100%',
              height: '100%',
            }} 
            src={project_dict} alt="" /></a>
          </div>

          <div className=' text-left shadow-lg p-10 rounded-xl my-10  bg-amber-100'>
          <h3 className=' py-2 text-amber-600 font-extrabold'>Automatic recipe Finder : </h3>
          <ul className=' py-2 pt-5 text-gray-700 list-disc'>
            <li>Calling this program with an Excel file as input will automatically create text files containing the first 10 links for the web pages that have the recipes of the items in the Excel file.</li>
            <li>Excel files need to have a particular format.</li>
            <li>Since web scraping links, implemented the functionality to hold and wait after extracting a certain number of links to avoid an error</li>
            <li>Click on the image below for more details!</li>
          </ul>
          </div>
          <div className='flex-1'>
          <a href='https://github.com/RaisaGhosh/Web-Scraping-Recipe-Links/tree/master'><Image className=' rounded-lg object-cover' style={{
              width: '100%',
              height: '100%',
            }} 
            src={recipe_finder} alt="" /></a>
          </div>

          <div className=' text-left shadow-lg p-10 rounded-xl my-10  bg-pink-100'>
          <h3 className=' py-2 text-pink-600 font-extrabold'>To-Do List : </h3>
          <ul className=' py-2 pt-5 text-gray-700 list-disc'>
            <li>A personal to-do list that has 3 views: All, Completed, Uncompleted. Used React localStorage as database.</li>
            <li>Used 3 components: Form(to add to-dos and filter out todos based on their completion status), Todos(to list out all
                todos), Todo(a component used in the Todos component to view/update each todo)</li>
            <li>Click on the image below for more details!</li>
          </ul>
          </div>
          <div className=' flex-1'>
          <a href='https://github.com/RaisaGhosh/to-do-list-project'><Image className=' rounded-lg object-cover' style={{
              width: '100%',
              height: '100%',
            }} 
            src={to_do_list} alt="" /></a>
          </div>

          <div className=' text-left shadow-lg p-10 rounded-xl my-10  bg-amber-100'>
          <h3 className=' py-2 text-amber-600 font-extrabold'>Analysing Student Results : </h3>
          <ul className=' py-2 pt-5 text-gray-700 list-disc'>
            <li>A package made for the use of my college's exam cell. It contained different programs that read files and performed some operations according to the user's choice, like ranking students according to their grades or making report cards for students.</li>
            <li>Divided the different functionalities into different programs for better readability, reproducibility, and modifications in the future.</li>
            <li>Click on the image below for more details!</li>
          </ul>
          </div>
          <div className=' basis-1/1 flex-1'>
          <a href='https://github.com/RaisaGhosh/Analysing_Student_Results'><Image className=' rounded-lg object-cover' style={{
              width: '100%',
              height: '100%',
            }} 
            src={exam_cell} alt="" /></a>
          </div>
          
        </div>
      </section>

      {/* SECTION 5 */}

      <section className=' pt-10'>

        <div>
          <h3 className=' text-3xl py-1 dark:text-gray-50'>Extracurricular</h3>
        </div>

        <div className='lg:flex-row lg:flex-wrap gap-10'>
          <div className=' text-left shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={cultural} width={130} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>Yuva Sangam Delegate</h3>
            <p className=' text-base text-amber-600 '>Government of India</p>
            <p className=' text-sm text-gray-400 '>2023</p>
            <ul className=' pt-5 text-gray-700 list-disc'>
              <li><a href='https://ebsb.aicte-india.org/' className=' font-bold text-gray-800 underline'>Cultural Exchange</a> organised by the Ministry of Education.</li>
              <li>Selected to represent West Bengal at Madhya Pradesh.</li>
              <li>Participated in a 10 day cultural immersion tour.</li>
              <li><a href='https://youtu.be/O4KiZoNZudU' className=' font-bold text-gray-800 underline'>Detailed Youtube Video</a></li>
            </ul>
          </div>
        </div>

        <div className='lg:flex-row lg:flex-wrap gap-10'>
          <div className=' text-left shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-pink-100 to-amber-100 dark:bg-gradient-from-pink-50 dark:to-amber-50'>
            <Image src={debate} width={130} height={100} alt=""/>
            <h3 className=' text-xl font-medium pt-8 pb-1 text-pink-600 '>National Debate Champion</h3>
            <p className=' text-base text-amber-600 '>IIT Kharagpur</p>
            <p className=' text-sm text-gray-400 '>2022</p>
              <p className=' pt-5 text-gray-700 list-disc' >Won a national level debate organisd by <a href='https://www.iitkgp.ac.in/' className=' font-bold text-gray-800 underline'>IIT Kharagpur</a></p>
          </div>
        </div>

      </section>
    
      <div className = ' pt-28 pb-10 text-center text-gray-600 dark:text-gray-300 '>
    <span>© 2024 Copyright</span>
    <div className=' font-semibold'>
      Raisa Ghosh
    </div>
    </div>

    </main>
    </div>
  )
}
