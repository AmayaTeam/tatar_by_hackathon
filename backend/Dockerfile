FROM python:3.10
ENV PYTHONBUFFERED=1

RUN apt-get update && apt-get install -y \
    locales
RUN dpkg-reconfigure locales

RUN pip install poetry

WORKDIR /app

COPY . /app

RUN poetry install
