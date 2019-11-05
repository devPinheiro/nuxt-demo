<template>
  <div class="w-full max-w-screen-xl pt-32 pb-20 lg:pt-40 mx-auto px-6 sm:pr-20 sm:pl-20 block mb-4 bg-gray-10 h-screen">
                  <div class="w-full xl:flex lg:flex ">

                 
                   <div class="block lg:hidden xl:hidden show  pt-8 m-auto  ">
                      <img class="porfolio_image w-64 m-auto"  src="../../assets/images/samuel_pinheiro_.png" alt="samuel svg" srcset="">
                    </div>
                    <div class="block  xl:flex lg:flex text-center lg:text-left text-dark  ">
                        <div class="xl:mt-18 xl:pr-32  lg:mt-18 lg:pr-32 ">
                          <h2 class="font-Montserrat font-thin  sm:text-lg md:text-xl lg:text-5xl pt-4 pb-2 text-dark-400 lg:pr-12 ">
                            Hi, I'm <span class="font-medium">Samuel</span>
                            </h2>
                            <h1 class="font-Montserrat font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-xl ">
                            Developer & Designer
                            </h1>

                            <p class="pt-10">I enjoy building digital products  with great user experience.  I’m currently available
to build your next big thing.</p>
                        </div>
                    </div>
                    <div class="block xl:flex lg:flex text-center lg:text-left hidden lg:show pt-8 m-auto  ">
                       <img  class="porfolio_image" src="../../assets/images/samuel_pinheiro_.png" alt="samuel svg" srcset="">
                    </div>
                  </div>

                  <div class="flex lg:pt-4">
                    <span class="p-8">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998V2.99998Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                    </span>
                    <span class="p-8">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6 9H2V21H6V9Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                    </span>
                    <span class="p-8">
                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268M8 19.0268C3 20.5268 3 16.5268 1 16.0268L8 19.0268Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                    </span>
                  </div>
                
                </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="css" >
.porfolio_image {
  animation: floating 4s ease-in-out infinite;
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}

</style>