import HeroSection from '@/components/HeroSection';
import { Spotlight } from '@/components/ui/Spotlight';
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from '@/components/FeaturedWabinars';
import TestiMonialCard from '@/components/TestiMonialCard';

import React from 'react'

const page = () => {
  return(

    <div>

<HeroSection/>
<Spotlight/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWabinars/>
<TestiMonialCard/>


    </div>
  )
}

export default page