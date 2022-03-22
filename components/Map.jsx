import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

const styles = {
  wrapper: 'flex-1 h-full w-full',
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [30.5852, 36.2384],
      zoom: 1,
    });
  }, []);

  return (
    <div className={styles.wrapper} id='map'>
      Map
    </div>
  );
};

export default Map;
