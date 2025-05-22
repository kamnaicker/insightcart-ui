export interface InsightCartPayload{
    persona:string;
    headline:string;
    heroImg: string;
    photoGrapher?: string;
    photoLink?: string;
}

export async function getInsightCartPayload(): Promise<InsightCartPayload>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ORIGIN}/`,{
       // force Server Component fetch, skip Next cache while iterating
       cache: 'no-store',
       headers: {'Accept': 'application/json'}, 
    });
    
    if (!res.ok) {
        throw new Error(`API ${res.status} ${res.statusText}`);
    }

    return res.json();
}