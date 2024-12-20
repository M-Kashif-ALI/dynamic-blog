"use client"

import { useEffect, useState } from 'react';
import CommentSection from "@/app/components/commentSection";
import { latestPosts } from "@/app/data";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  img: string;
  name: string;
  detailsDesc: string;
  settingUpHeading1: string;
  setContent1: string;
  settingUpHeading2: string;
  setContent2: string;
  settingUpHeading3: string;
  setContent3: string;
  coreHeading1: string;
  coreContent1: string;
  coreHeading2: string;
  coreContent2: string;
  coreHeading3: string;
  coreContent3: string;
  miniProjectIdea: string;
};

type Params = {
  details: string[];
};

const Page = ({ params }: { params: Promise<Params> }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [details, setDetails] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setDetails(resolvedParams.details);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (details) {
      const post = latestPosts.find((item) => item.id === Number(details[0])) as Post;
      setPost(post);
    }
  }, [details]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const imageSrc = post.img;

  return (
    <div className="bg-[#242535] md:px-10 text-white md:py-10 px-2 overflow-y-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-center font-bold">{post.title}</h1>
        <Image src={imageSrc} alt="Main pic" width={400} height={400} className="md:h-[60vh] md:w-[50%] rounded-md border-[2px] border-gray-400 w-[90%]" />
        <h2 className="text-3xl font-medium">What is {post.name}?</h2>
        <p className="md:w-[50%]">{post.detailsDesc}</p>
        <h3 className="text-2xl font-bold">Setting up {post.name} Environment</h3>
        <ul className="md:w-[50%] flex flex-col gap-[20px]">
          <li><span className="text-lg font-semibold font-serif">{post.settingUpHeading1}</span> {post.setContent1}</li>
          <li><span className="text-lg font-semibold font-serif">{post.settingUpHeading2}</span> {post.setContent2}</li>
          <li><span className="text-lg font-semibold font-serif">{post.settingUpHeading3}</span> {post.setContent3}</li>
        </ul>
        <h3 className="text-2xl font-bold">Core Concepts</h3>
        <ul className="md:w-[50%] flex flex-col gap-[20px]">
          <li><span className="text-lg font-semibold font-serif">{post.coreHeading1}</span>: {post.coreContent1}</li>
          <li><span className="text-lg font-semibold font-serif">{post.coreHeading2}</span>: {post.coreContent2}</li>
          <li><span className="text-lg font-semibold font-serif">{post.coreHeading3}</span>: {post.coreContent3}</li>
        </ul>

        <h2 className="text-3xl font-medium">Mini Project idea!</h2>
        <p className="font-serif text-lg font-semibold md:w-[50%]">{post.miniProjectIdea}</p>
      </div>
      <br />

      <CommentSection />
    </div>
  );
};

export default Page;
