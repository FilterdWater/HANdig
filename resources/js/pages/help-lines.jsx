import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import image1 from "../../assets/help-lines/Ondersteuner1.png"

const HelpLines = () => {
  return (
    <>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Hulplijnen</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Voor begeleiding naast je studie of persoonlijke problemen kun je altijd contact opnemen met de studentbegeleiders en vertrouwenspersonen. Voor meer informatie rondom ondersteuning, veiligheid of bijzondere situaties ga naar: <a className='text-blue-500 underline' href="https://www1.han.nl/insite/studenten/panelnav.xml/hulp-ondersteuning-training" target='_blank'>Hulp, Ondersteuning en Training</a></p>
        </CardContent>
      </Card>
      <div className='grid grid-cols-2 '>
        {/* Ondersteuner */}
        <div className='flex flex-col items-center justify-center'>
          <img className='size-64' src={image1} alt='ondersteuner' />
          <span>Email: test@han.nl</span>
          <span>Tel: 0612345678</span>
        </div>
        {/* Ondersteuner */}
        <div className='flex flex-col items-center justify-center'>
          <img className='size-64' src={image1} alt='ondersteuner' />
          <span>Email: test@han.nl</span>
          <span>Tel: 0612345678</span>
        </div>
        {/* Ondersteuner */}
        <div className='flex flex-col items-center justify-center'>
          <img className='size-64' src={image1} alt='ondersteuner' />
          <span>Email: test@han.nl</span>
          <span>Tel: 0612345678</span>
        </div>
        {/* Ondersteuner */}
        <div className='flex flex-col items-center justify-center'>
          <img className='size-64' src={image1} alt='ondersteuner' />
          <span>Email: test@han.nl</span>
          <span>Tel: 0612345678</span>
        </div>
      </div>
    </>
  )
}

export default HelpLines