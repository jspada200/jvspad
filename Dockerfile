FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN python -m pip install --no-cache-dir -r requirements.txt
RUN mkdir /gunicorn-worker-tmp-dir
RUN chmod 777 /gunicorn-worker-tmp-dir
COPY . /code/
ENV DEBUG=0
RUN python manage.py collectstatic