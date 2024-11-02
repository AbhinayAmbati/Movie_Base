import Results from '@/app/components/Results';
import React, { Suspense } from 'react';

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm;
    
    let results = [];
    
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
            { next: { revalidate: 10000 } }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch search results");
        }

        const data = await res.json();
        results = data.results;

    } catch (error) {
        console.error(error);
        return <h1 className='text-center pt-6'>Failed to load results.</h1>;
    }

    return (
        <div>
            {results && results.length === 0 ? (
                <h1 className='text-center pt-6'>No results found for "{searchTerm}"</h1>
            ) : (
                <Suspense fallback={<div>Loading results...</div>}>
                    <Results results={results} />
                </Suspense>
            )}
        </div>
    );
}
