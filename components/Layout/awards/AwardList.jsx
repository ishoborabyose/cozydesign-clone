import Image from "next/image";
import React from "react";
const awards = [
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp",
  },
  {
    imageURL:
      "https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg",
  },
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp",
  },
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp",
  },
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg",
    subtitle: "BBB rating: A+",
  },
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp",
  },
  {
    imageURL: "https://agencyvista.com/verified-agency-vista-badge.png",
  },
  {
    imageURL:
      "https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png",
  },
  {
    imageURL:
      "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp",
  },
];
export default function AwardList() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 md:flex-row md:space-x-12   items-center gap-5">
      <div className="flex flex-col items-center gap-5">
        {awards.slice(0, 4).map(({ imageURL, subtitle }, idx) => (
          <div key={idx}>
            <Image src={imageURL} width={140} height={140} alt="award" />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-5">
        {awards.slice(4).map(({ imageURL, subtitle }, idx) => (
          <div className="flex flex-col items-center gap-3" key={idx}>
            <div>
              <Image src={imageURL} width={140} height={140} alt="award" />
            </div>
            {subtitle && (
              <h5 className="text-btnText text-xs font-bold">{subtitle}</h5>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
