from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username", read_only=True)

    class Meta:
        fields = (
            "id",
            "author",
            "title",
            "body",
            "created_at",
            "image",
        )
        model = Post
