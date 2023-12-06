import React from "react";

const Card = () => {
	return (
		<div className="w-full md:w-52 md:h-44 rounded-sm ">			
				<img
					src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=1024x1024&w=is&k=20&c=iBBM7YTn5Rf-QhCd0kkvFaDNLV6Rb02iMQlS39LSSTI="
					alt=""
                    // width={180}
                    // height={150}
					className="rounded md:mx-3 sm:w-1/2  sm:h-auto md:w-[180px] md:h-[140px]  "
				/>
                <p className="text-center mt-2 font-semibold">Food and Beverages</p>
		</div>
	);
};

export default Card;
