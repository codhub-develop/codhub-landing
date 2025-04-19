import codhubMail from '../../assets/CodhubMail.png'
import { Button } from '../ui/Button'


export function ProductCard() {
  return (
      <div className='flex flex-row gap-4 py-4 text-white'>
      <img src={codhubMail} alt="codhubMail" className='border-5 border-white rounded-md w-160' />
      <div className='flex flex-col justify-center'>
        <h4 className='text-3xl font-display mb-2'>CodhubMail</h4>
        <p className='text-md text-medium-gray mb-6'>          
          Lorem ipsum dolor sit amet. Eos illo fuga est explicabo dolorum ut totam sint. Est dignissimos molestiae cum voluptas modi sed ipsa rerum sed ipsa sit modi aut.
        </p>
        <Button variant='gradient' size='medium' className='self-start'>
          Learn More
        </Button>
      </div>
    </div>
  )
}