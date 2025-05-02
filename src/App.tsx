import React from "react"
import Header from "./components/Header"
import ExhibitInfo from "./components/ExhibitInfo"
import ExhibitGallery from "./components/ExhibitGallery"
import Footer from "./components/Footer"
import { ExhibitData } from "./types"

const exhibitData: ExhibitData = {
  title: "HIST 108: U.S. Colonial Empire",
  subtitle: "Colonial News project",
  description: [
    `This exhibit explores the complex relationship between the U.S. colonization of American Samoa and the adoption of 
    American popular culture by Samoans. The economic dependence of American Samoa on the U.S. has created a structural situation 
    in which Samoans are constantly surrounded by American products and this has increased their cultural relevance on the island.`,
  ],
  galleryItems: [
    {
      src: "WSU_football.png.webp",
      width: 1200,
      height: 800,
      title: "Washington State University's first-ever Samoan ballplayers",
    },
    {
      src: "Samoan_hip_hop.png",
      width: 1200,
      height: 800,
      title: "Boo Yaa Tribe - Samoan Hip Hop Group"
    },
    {
      src: "Pea_tattoo.jpg",
      width: 1200,
      height: 800,
      title: "Man showing off his P'ea (traditional male tattoo) while wearing khaki pants"
    },
    {
      src: "Samoan_wrestler.jpg",
      width: 1200,
      height: 800,
      title: "Edward Smith Fatu (Umaga) - former WWE professional wrestler"
    },
    {
      src: "Fagatogo_Marketplace.jpg",
      width: 1200,
      height: 800,
      title: "Fagatogo Marketplace - blend of traditional Samoan clothing with American-style stalls"
    },
    {
      src: "moana_chips.jpg",
      width: 1200,
      height: 800,
      title: "Moana Chips - American-style chips made in American Samoa"
    }
  ],
  studentInfo: {
    name: "Tony Munene",
    course: "HIST 108",
  },
}

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-5xl px-4">
        <Header title={exhibitData.title} subtitle={exhibitData.subtitle} />

        <ExhibitInfo description={exhibitData.description} />

        <ExhibitGallery items={exhibitData.galleryItems} />

        <div className="flex-grow"></div>

        <Footer
          studentName={exhibitData.studentInfo.name}
          courseName={exhibitData.studentInfo.course}
        />
      </div>
    </div>
  )
}

export default App
