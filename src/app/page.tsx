"use client"
import Image from 'next/image'
import FormHome from './components/home/FormHome'
import BigProductCard from './components/home/BigProductCard'
import Tag from './components/global/Tag'
import Button from './components/global/Button'
import SmallProductCard from './components/global/SmallProductCard'
import BigCardCarousel from './components/global/BigCardCarousel'
import SmallCardCarousel from './components/global/SmallCardCarousel'


export default function Home() {

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  const projects = [
    {tagList:[{label: 'Lançamento'}, {label:'Moderna'}], imageList:['produto1/image-1.png', 'produto1/image-2.png', 'produto1/image-3.png', 'produto1/image-2.png'], title:'Espaçosa casa moderna para o campo', descriptionList:[{number: '2', metricUnit: 'pavimentos', iconImg: 'Floors.svg'}, {number: '3', metricUnit: 'quartos', iconImg: 'Bedrooms.svg'}, {number: '2', metricUnit: 'banheiros', iconImg: 'Shower.svg'}, {number: '2', metricUnit: 'carros', iconImg: 'Carro.svg'}, {number: '12 x 20', metricUnit: 'm²', iconImg: 'Dimensions.svg'}]},
    {tagList:[{label: 'Lançamento'}, {label:'Moderna'}], imageList:['produto1/image-1.png', 'produto1/image-2.png', 'produto1/image-3.png', 'produto1/image-2.png'], title:'Espaçosa casa moderna para o campo', descriptionList:[{number: '2', metricUnit: 'pavimentos', iconImg: 'Floors.svg'}, {number: '3', metricUnit: 'quartos', iconImg: 'Bedrooms.svg'}, {number: '2', metricUnit: 'banheiros', iconImg: 'Shower.svg'}, {number: '2', metricUnit: 'carros', iconImg: 'Carro.svg'}, {number: '12 x 20', metricUnit: 'm²', iconImg: 'Dimensions.svg'}]},
    {tagList:[{label: 'Lançamento'}, {label:'Moderna'}], imageList:['produto1/image-1.png', 'produto1/image-2.png', 'produto1/image-3.png', 'produto1/image-2.png'], title:'Espaçosa casa moderna para o campo', descriptionList:[{number: '2', metricUnit: 'pavimentos', iconImg: 'Floors.svg'}, {number: '3', metricUnit: 'quartos', iconImg: 'Bedrooms.svg'}, {number: '2', metricUnit: 'banheiros', iconImg: 'Shower.svg'}, {number: '2', metricUnit: 'carros', iconImg: 'Carro.svg'}, {number: '12 x 20', metricUnit: 'm²', iconImg: 'Dimensions.svg'}]},
    {tagList:[{label: 'Lançamento'}, {label:'Moderna'}], imageList:['produto1/image-1.png', 'produto1/image-2.png', 'produto1/image-3.png', 'produto1/image-2.png'], title:'Espaçosa casa moderna para o campo', descriptionList:[{number: '2', metricUnit: 'pavimentos', iconImg: 'Floors.svg'}, {number: '3', metricUnit: 'quartos', iconImg: 'Bedrooms.svg'}, {number: '2', metricUnit: 'banheiros', iconImg: 'Shower.svg'}, {number: '2', metricUnit: 'carros', iconImg: 'Carro.svg'}, {number: '12 x 20', metricUnit: 'm²', iconImg: 'Dimensions.svg'}]},

  ]

  return (
    <main className='w-full pb-24'>
      <div className='space-y-16'>
        <div>
          <div className='mx-auto md:px-4 md:max-w-6xl'>
              <FormHome/>
          </div>
            <img className='lg:w-full w-auto object-cover inset-0 md:h-[44rem] h-[38rem] lg:max-h-[42rem] mt-10 md:mt-10 lg:mt-8' src="/Hero-img.png" />
        </div>
        <div className='mx-auto px-4 md:max-w-6xl'>
          <div className='hidden md:block'>
              <BigCardCarousel slides={projects}/>
          </div>
          <div className='block md:hidden'>
            <SmallCardCarousel slides={projects}/>
          </div>
        </div>
        <div className='mx-auto flex flex-wrap gap-8 justify px-4 md:max-w-6xl'>
            {projects.map((item, idx) => {
                  return ( 
                    <div key={idx} className='w-full md:w-[47.8%] lg:w-[48.3%] xl:w-[48.5%]'>
                      <SmallProductCard  imageList={item.imageList} tagList={item.tagList} title={item.title} descriptionList={item.descriptionList}/>
                    </div>
              )})}
        </div>
      </div>
    </main>
  )
}
