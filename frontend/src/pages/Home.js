const Home = () => {
  return (
    <div>
      <section id="hero" className="justify-center min-h-screen">
        <div className="container mx-auto flex flex-row">
          <div className="landing-box mx-32 mt-[300px] flex flex-col" data-aos="fade-up">
            <h1 className="font-bold text-6xl">HEALTH TRACKER</h1>
            <h5 className="mt-3 mb-5 text-lg w-4/5">Unlock Your Potential for Optimal Health 
            and Well-being: Dive Into a Comprehensive Platform Offering BMI 
            Tracking, Nutritious Meal Plans, Tailored Workout Routines, 
            and Expert Health Articles.</h5>
            <a href="/register" className="btn-primary px-6 py-2 rounded-md text-white text-center mt-10 w-[200px]">Get Started</a>
          </div>
        </div>
      </section>

      <section id="training" className="min-h-screen">
        <div className="container">
          <div className="flex flex-col justify-center items-center mt-32">
            <p className="text-6xl font-bold" data-aos="fade-down">Workout Plans</p>
            <p className="w-[800px] mt-4" data-aos="fade-down">Energize Your Workouts with Personalized Exercise Routines
            Ready to kickstart your fitness journey? Our platform offers a wide range of exercise routines designed to suit your needs and preferences. Whether you prefer high-intensity interval training, yoga, strength training, or cardio, we have something for everyone. Say goodbye to monotonous workouts and hello to a fun and effective fitness regimen that will keep you motivated and engaged.</p>
            <div className="grid grid-cols-3 gap-24 px-32 py-24 text-center" data-aos="fade-up">
              <img alt='workout' src="calisthenics.avif" className="image-hover rounded-md h-[400px]"></img>
              <img alt='workout' src="cardio.jpg" className="image-hover rounded-md h-[400px]"></img>
              <img alt='workout' src="strength.jpg" className="image-hover rounded-md h-[400px]"></img>
              <p className="-mt-14 font-semibold">CALISTHENICS</p>
              <p className="-mt-14 font-semibold">CARDIO</p>
              <p className="-mt-14 font-semibold">STRENGTH TRAINING</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f0f0f] min-h-[600px]">
          <div className="flex flex-col mx-32 justify-center items-center">
            <p className="text-6xl font-bold mt-44">BMI Calculator</p>
            <p className="w-[800px] mt-4">Discover Your Body's Composition with Our BMI Calculator
            Begin your health journey by understanding your body better. Our BMI 
            calculator provides you with insightful information about your body mass 
            index, helping you gauge where you stand in terms of health and fitness.</p>
            <a href="/register" className="btn-primary px-6 py-2 rounded-md text-white text-center mt-10 w-[200px]">Measure My BMI!</a>
          </div>
      </section>
      <section className="min-h-[600px] mb-44">
          <div className="flex flex-col mx-80 justify-center items-center">
            <p className="text-6xl font-bold mt-44 text-center">Discover the Best Meals For You!</p>
            <div className="grid grid-cols-2 mt-24">
              <img alt='salad' src="salad.png" className="h-auto w-[350px]"/>
              <p>Explore Nutritious Meal Ideas Tailored to Your Goals
              Eating healthy doesn't have to be complicated. Dive into a world of delicious 
              and nutritious meal ideas curated by our team of experts. Whether you're 
              looking to lose weight, gain muscle, or simply maintain a balanced diet, 
              we've got you covered. From quick and easy recipes to elaborate culinary creations, 
              our meal recommendations will tantalize your taste buds while nourishing your 
              body from within.</p>
            </div>
          </div>
      </section>
      <section className="bg-[#0f0f0f] min-h-[600px]">
          <div className="grid grid-cols-2">
            <div className="mt-44 mx-32">
              <p className="text-6xl font-bold">Subscribe for Premium Account</p>
              <p className="mt-4">Take control of your health destiny with our premium account. Gain access to premium content, personalized plans, and expert guidance tailored just for you.</p>
            </div>
            <div className="mt-44 bg-[#e8b007] rounded-md mr-32 flex flex-col">
              <p className="mt-4 font-semibold text-center">Monthly Premium</p>
              <ul className="list-disc ml-20 mt-4">
                <li>Access to meal reccomendations according to your profile</li>
                <li>Full health tracking features</li>
                <li>And more!</li>
              </ul>
              <div className="text-center justify-center mt-4">
                <p className="py-6">Only Rp15.000 / Month</p>
                <a href="/register" 
                className="bg-white text-black py-3 px-10 w-[200px] rounded-md hover:bg-black hover:text-white transition duration-200 ease-in-out">
                  Buy Premium</a>
              </div>
            </div>
          </div>
      </section>
      <section className="min-h-[600px]">
          <div className="container">
            <div className="flex flex-col mx-32 mt-44">
              <p className="text-6xl font-bold">Why Us?</p>
              <div className="grid grid-cols-5 gap-4 text-center mt-10">
                <div className="btn-primary col-span-2 px-6 py-20 font-semibold rounded-lg hover:text-lg">Comprehensive Functionality</div>
                <div className="btn-primary col-span-2 px-6 py-20 font-semibold rounded-lg hover:text-lg">Enhanced Personalization</div>
                <div className="btn-primary px-6 py-20 font-semibold rounded-lg hover:text-lg">Appealing Design</div>
                <div className="btn-primary px-6 py-20 font-semibold rounded-lg hover:text-lg">High-Quality Content</div>
                <div className="btn-primary px-6 py-20 font-semibold rounded-lg hover:text-lg">User-Friendly</div>
                <div className="btn-primary col-span-3 px-6 py-20 font-semibold rounded-lg hover:text-lg">Excellent Customer Support</div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
