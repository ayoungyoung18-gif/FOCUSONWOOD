from django.db import models

# 가구 소품 정보 (예: 도마, 트레이 등)
class Furniture(models.Model):
    name = models.CharField(max_length=100) # 소품 이름
    base_price = models.IntegerField()       # 기본 제작비
    wood_type = models.CharField(max_length=50) # 추천 목재
    image_url = models.URLField(blank=True)   # 이미지 주소

    def __str__(self):
        return self.name

# 고객이 계산한 견적 내역
class Estimate(models.Model):
    furniture_name = models.CharField(max_length=100)
    width = models.IntegerField()  # 가로(mm)
    depth = models.IntegerField()  # 세로(mm)
    height = models.IntegerField() # 높이(mm)
    wood_choice = models.CharField(max_length=50) # 선택 목재
    total_price = models.IntegerField() # 최종 견적가
    created_at = models.DateTimeField(auto_now_add=True)