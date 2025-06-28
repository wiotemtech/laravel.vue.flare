<script>
import LandingPage from '../components/LandingPage.vue';
import flare from './flare.vue';
import Cause from '../components/Cause.vue';
import Humanity from '../components/Humanity.vue';
import patner from '../components/patner.vue';


export default {
    components: {
        LandingPage,
        flare,
        Cause,
        Humanity,
        patner,
     
    },
};
</script>

<template>
    <div>
        <LandingPage />
        <flare/>
         <humanity/>
        <Cause/>
        <patner/>
       
      
        
    </div>
</template>