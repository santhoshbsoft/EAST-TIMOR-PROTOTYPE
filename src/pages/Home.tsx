import Hero from '../components/home/Hero';
import PopularDestinations from '../components/home/PopularDestinations';
import WeatherWidget from '../components/home/WeatherWidget';
import ExploreModules from '../components/home/ExploreModules';
import IslandMap from '../components/home/IslandMap';

const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <PopularDestinations />
            <ExploreModules />
            <IslandMap />
            <WeatherWidget />
        </div>
    );
};

export default Home;
