
function SearchResults() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('');
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get('/characters?' + query)
          .then(res => setData(res.data));
      };
  
      fetchData();
    }, [query]);
  
    return (
      <>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <section className='grid-list'>
          {data.hits.map((item, index) => {
            return(
              <CharacterCard />
              <LocationCard />
              <EpisodeCard />
            )})}
      </section>
      </>
    );
  }