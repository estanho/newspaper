"use server";

import { NewspaperSchema } from "@/types/newspaper";
import { NewspaperDaysSchema } from "@/types/newspaper-days";

import { newspaperDays } from "../json/newspaper-days.json";
import { newspapers } from "../json/newspaper.json";

export async function fetchNewspaperDays() {
  /*
  const url = `${process.env.APP_API_URL}/newspaper_days`;

  const response = await fetch(url)
    .then(async (res) => {
      const data = await res.json();
      const dataParsed = NewspaperDaysSchema.parse(data);
      return dataParsed;
    })
    .catch(() => {
      return null;
    });
  */

  const response = NewspaperDaysSchema.parse(newspaperDays);

  return {
    status: response !== null ? 200 : 400,
    error: response !== null ? false : true,
    data: response,
  };
}

export async function fetchNewspaperBySlug(slug: string) {
  /*
  const url = `${process.env.APP_API_URL}/newspaper/${slug}`;
  const response = await fetch(url)
    .then(async (res) => {
      const data = await res.json();
      const dataParsed = NewspaperSchema.parse(data);
      return dataParsed;
    })
    .catch(() => {
      return null;
    });
  */

  const { data } = NewspaperSchema.safeParse(
    newspapers.find((newspaper) => newspaper.slug === slug)
  );

  const response = data === undefined ? null : data;

  return {
    status: response !== null ? 200 : 400,
    error: response !== null ? false : true,
    data: response,
  };
}
