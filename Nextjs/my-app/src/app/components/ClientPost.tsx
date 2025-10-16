
"use client";
import React from 'react';
import { PostProps } from '../../../type/post';



const ClientPostPage = () => {
   
    const [post, setPost] = React.useState<PostProps[]>([]);

    console.log(post)
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(String(error));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }   

    return (
        <div>
          {post.map((p) => (
            <h1 key={p.id}>{p.title}</h1>
          ))}
        </div>
    );
};

export default ClientPostPage;