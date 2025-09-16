const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmfgilapc000p01sd9z7878oo',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Clearing the Way',
    subtitle:
      'Nearly 40% of the EACOP route is already carved through forests and villages despite community opposition.',
    date: 'Sept. 16 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/Mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/Mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría for Mongabay.',
  chapters: [

    // chapter 1
    {
      id: 'chapter 1',
      alignment: 'left',
      hidden: false,
      title: 'Through the Safety Net',
      description: "Oil pipeline expansion is putting the planet’s last biodiversity strongholds—and many Indigenous lands—at risk.",
       legend: [
        {
          title: 'Global network of oil/gas pipelines',
          fromLayer: 'Pipelines existing',
        },
      ],
      location: {
        center: [31.5, 1.25],
        zoom: 1.8,
        pitch: 0.0,
        bearing: 0,
      },
      images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Pipeline',
          author: 'Placeholder photo',
        },
      ],
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
        {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
               {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
        {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
          {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },  
          {
          layer: 'admin-0-boundary-a',
          opacity: 0,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 0,
        },  
         {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },
      ],
        onChapterExit: [
          {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },  
      ],
    
    },


    // chapter 2
    {
      id: 'chapter 2',
      alignment: 'left',
      hidden: false,
      title: 'EACOP',
      description: "The East African Crude Oil Pipeline (EACOP), also known as Uganda–Tanzania Crude Oil Pipeline or Hoima–Tanga Port Oil Pipeline, is a proposed oil pipeline in East Africa.",
             legend: [
        {
          title: 'Existing pipelines',
          fromLayer: 'Pipelines existing',
        },
             {
          title: 'Under construction or proposed pipelines',
          fromLayer: 'Pipelines under construction',
        },
         ],
      location: {
        center: [36.0, -2.8],
        zoom: 4.2,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                  {
          layer: 'admin-0-boundary-a',
          opacity: 1,
        },  
          {
          layer: 'admin-0-boundary-b',
          opacity: 1,
        },  
      ],
        onChapterExit: [
        {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
        {
          layer: 'Satellite_2025',
          opacity: 0,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
        {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
          {
          layer: 'admin-0-boundary-disputed',
          opacity: 0,
        },  
         {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },          
      ],
    
    },


    // chapter 3
    {
      id: 'chapter 3',
      alignment: 'left',
      hidden: false,
      title: 'Where pipelines meet critical ecosystems',
      description: "The Global Safety Net is composed of five main layers for protecting biodiversity and climate: Species Rarity Sites, High Biodiversity Areas, Large Mammal Landscapes, Intact Wilderness, and Climate Stabilization Areas. These are critical areas that require intensified conservation efforts. Overlaying oil infrastructure with these critical habitats and Indigenous homelands reveals risks of cascading fragmentation.",
             legend: [
        {
          title: 'Global Safety Net',
          color: '#006a54',
        },
         ],
      location: {
        center: [36.0, -2.8],
        zoom: 5.6,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'GSN-climate-stabilization',
          opacity: 1,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 1,
        },
        {
          layer: 'wdpas-2025',
          opacity: 1,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 1,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 1,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 1,
        },
      ],
        onChapterExit: [
                  {
          layer: 'wdpas-2025 color threatend',
          opacity: 0,
        },
      ],
    
    },
    

    // chapter 4
    {
      id: 'chapter 4',
      alignment: 'left',
      hidden: false,
      title: 'Protected areas under threat',
      description: "In addition to disrupting wildlife corridors and other areas of the Global Safety Net, the EACOP’s construction threatens 44 protected areas within Uganda and Tanzania.",
             legend: [
        {
          title: 'Protected areas',
          color: '#bdeaaf',
        },
         ],
      location: {
        center: [36.0, -2.8],
        zoom: 5.6,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
         {
          layer: 'GSN-climate-stabilization',
          opacity: 0,
        },
        {
          layer: 'GSN-potential-corridors',
          opacity: 0,
        },
        {
          layer: 'wdpas-2025',
          opacity: 0,
        },
        {
          layer: 'GSN-intact-wilderness-areas',
          opacity: 0,
        },
        {
          layer: 'GSN-high-biodiversity',
          opacity: 0,
        },
        {
          layer: 'GSN-large-mammals',
          opacity: 0,
        },
      ],
        onChapterExit: [
            {
          layer: 'wdpas-2025 color threatend',
          opacity: 1,
        },
                         {
          layer: 'wdpas-2025-Murchison',
          opacity: 0,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0,
        },
      ],
    
    },
    
        
    // chapter 5
    {
      id: 'chapter 5',
      alignment: 'left',
      hidden: false,
      title: 'National Treasure',
      description: "Murchison Falls National Park is Uganda's oldest and largest national park, home to elephants, lions, giraffes, and numerous endemic species.",
             legend: [
        {
          title: 'Murchison Falls National Park',
     // fromLayer: 'wdpas-2025-Murchison',
            border: '#c3a7c5',
        },
         ],
  images: [
        {
          src: 'photo2.jpg', 
          position: 'top',
          title: 'Rothschild-Giraffes',
          author: 'Murchison Falls',
        },
      ],         
      location: {
        center: [31.506, 2.166],
        zoom: 10.75,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
                 {
          layer: 'wdpas-2025-Murchison',
          opacity: 1,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0.2,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 1,
        },
      ],
        onChapterExit: [
                 {
          layer: 'Satellite_2025',
          opacity: 1,
        },
             {
          layer: 'Pipeline_icons',
          opacity: 0,
        },
      ],
    
    },
    
      
    // chapter 6
    {
      id: 'chapter 6',
      alignment: 'left',
      hidden: false,
      title: 'Tracks inside',
      description: "By July 2025, 38 kilometers of roads and nine well pads have been cleared or constructed inside Murchison Falls National Park.",
           legend: [
        {
          title: 'Tilenga Feeder Pipeline Trajectory',
          icon: 'pipeline',
        },
         ],
      sources: 'Satellite image from Copernicus',
      location: {
        center: [31.506, 2.166],
        zoom: 10.75,
        pitch: 0.0,
        bearing: 0,
      },
     
      mapAnimation: 'easeTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                          {
          layer: 'wdpas-2025 color',
          opacity: 0,
        },
                 {
          layer: 'wdpas-2025-Murchison',
          opacity: 1,
        },
                     {
          layer: 'wdpas-2025-Murchison fill',
          opacity: 0.2,
        },
                  {
          layer: 'Satellite_2023',
          opacity: 0,
        },
      ],
        onChapterExit: [
                      {
          layer: 'Pipeline_icons',
          opacity: 1,
        },
                 {
          layer: 'Satellite_2025',
          opacity: 1,
        },
      ],
    
    },
       
   
   
   

  ],
};
