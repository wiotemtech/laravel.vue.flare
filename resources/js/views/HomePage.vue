<script>
import LandingPage from '../components/LandingPage.vue';
import flare from './flare.vue';
import Cause from '../components/Cause.vue';
import Humanity from '../components/Humanity.vue';
import patner from '../components/patner.vue';
import Ourpatners from '../components/Ourpatners.vue';


export default {
    components: {
        LandingPage,
        flare,
        Cause,
        Humanity,
        patner,
        Ourpatners,
     
    },
};
</script>

<template>
    <div>
        <LandingPage />
         <humanity/>
        <flare/>
       
        <Cause/>
        <Ourpatners/>

        <patner/>
       
      
        
    </div>
</template>