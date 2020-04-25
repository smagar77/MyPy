import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="Testing MyPy Package", # Replace with your own username
    version="0.0.1",
    author="Sachin Magar",
    author_email="smagar77@gmail.com",
    description="A small testing package MyPy",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/smagar77/MyPy.git",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)